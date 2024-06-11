import { Order } from 'src/backend/entities/Order';
import { Table } from 'src/backend/entities/Table';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'pos_db',
  synchronize: true,
  logging: true,
  entities: [Table, Order],
  subscribers: [],
  migrations: [],
});
