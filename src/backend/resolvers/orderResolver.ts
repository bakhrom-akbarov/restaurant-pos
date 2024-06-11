import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { EntityManager } from 'typeorm';

import { MealInputType, Order } from '../entities/Order.js';
import { Table } from '../entities/Table.js';
import { AppDataSource } from '../ormconfig.js';

@Resolver(Order)
export class OrderResolver {
  private orderRepository = AppDataSource.getRepository(Order);

  constructor(private readonly entityManager: EntityManager) {}

  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    return await this.orderRepository.find({
      relations: ['table'],
      order: { createdAt: 'DESC' },
    });
  }

  @Mutation(() => Order)
  async createOrder(
    @Arg('tableId') tableId: string,
    @Arg('meals', () => [MealInputType]) meals: MealInputType[],
  ): Promise<Order> {
    return await AppDataSource.transaction(
      'SERIALIZABLE',
      async (transactionalEntityManager) => {
        const tableInDB = await transactionalEntityManager.findOne(Table, {
          where: { id: tableId },
        });

        if (!tableInDB) {
          throw new Error('Table not found');
        }

        if (!tableInDB.available) {
          throw new Error('Table not available');
        }

        let totalCost = 0;
        meals.forEach((meal) => {
          totalCost += meal.price * meal.quantity;
        });

        const order = this.orderRepository.create({ tableId, meals });
        order.totalCost = totalCost;

        const savedOrder = await transactionalEntityManager.save(order);

        tableInDB.available = false;
        await transactionalEntityManager.save(tableInDB);

        return savedOrder;
      },
    );
  }

  @FieldResolver(() => String, { nullable: true })
  async tableId(@Root() order: Order): Promise<string | null> {
    const table = await AppDataSource.getRepository(Table).findOne({
      where: { id: order.tableId },
    });

    return table ? table.id : null;
  }

  //   finish order
  @Mutation(() => Boolean)
  async finishOrder(@Arg('id') id: string): Promise<boolean> {
    return await AppDataSource.transaction(
      'SERIALIZABLE',
      async (transactionalEntityManager) => {
        try {
          const order = await transactionalEntityManager.findOne(Order, {
            where: { id },
          });

          if (!order) {
            throw new Error('Order not found');
          }

          const table = await transactionalEntityManager.findOne(Table, {
            where: { id: order.tableId },
          });

          if (!table) {
            throw new Error('Table not found');
          }

          table.available = true;
          await transactionalEntityManager.save(table);

          order.finishedAt = new Date();
          await transactionalEntityManager.save(order);

          return true;
        } catch (error) {
          throw error;
        }
      },
    );
  }
}
