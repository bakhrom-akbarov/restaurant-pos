import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Table } from './Table.js';

@Entity('order')
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: string;

  @Column()
  @Field(() => String)
  tableId!: string;

  @Column('json')
  @Field(() => [MealOutputType])
  meals!: { id: number; quantity: number; price: number }[];

  @ManyToOne(() => Table, (table) => table.orders)
  @JoinColumn({ name: 'tableId' })
  @Field(() => Table)
  table!: Table;

  @CreateDateColumn()
  @Field()
  createdAt!: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  finishedAt?: Date;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  totalCost!: number;
}

@InputType()
export class MealInputType {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  quantity!: number;

  @Field(() => Int)
  price!: number;
}

@ObjectType()
export class MealOutputType {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  quantity!: number;

  @Field(() => Int)
  price!: number;
}
