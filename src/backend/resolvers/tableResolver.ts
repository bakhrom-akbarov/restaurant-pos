import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { EntityManager } from 'typeorm';

import { Table } from '../entities/Table.js';
import { AppDataSource } from '../ormconfig.js';

@Resolver()
export class TableResolver {
  private tableRepository = AppDataSource.getRepository(Table);

  constructor(private readonly entityManager: EntityManager) {}

  @Query(() => [Table])
  async tables() {
    return await this.tableRepository.find();
  }

  @Mutation(() => Table)
  async createTable(
    @Arg('name') name: string,
    @Arg('seats') seats: number,
    @Arg('available', { defaultValue: true }) available: boolean,
  ) {
    return await AppDataSource.transaction(
      async (transactionalEntityManager) => {
        // check if table already exists
        const tableInDB = await transactionalEntityManager.findOne(Table, {
          where: { name },
        });
        if (tableInDB) {
          throw new Error('Table with this name already exists');
        }

        const table = this.tableRepository.create({ name, seats, available });
        return await transactionalEntityManager.save(table);
      },
    );
  }

  @Mutation(() => Boolean)
  async updateTableAvailability(
    @Arg('id') id: number,
    @Arg('available') available: boolean,
  ) {
    return await this.entityManager.transaction(
      async (transactionalEntityManager) => {
        await transactionalEntityManager.update(Table, id, { available });
        return true;
      },
    );
  }
}
