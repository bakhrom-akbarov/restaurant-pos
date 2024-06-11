import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Order } from './Order.js';

@Entity('table')
@ObjectType()
export class Table {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: string;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field()
  seats!: number;

  @Column({ default: true })
  @Field()
  available!: boolean;

  @OneToMany(() => Order, (order) => order.tableId)
  orders!: Order[];
}
