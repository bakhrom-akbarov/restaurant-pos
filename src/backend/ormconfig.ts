import * as process from 'node:process';
import pkg from 'pg';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Order } from './entities/Order.js';
import { Table } from './entities/Table.js';

const { Client } = pkg;

const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'pos_db8',
  synchronize: true,
  logging: true,
  entities: [Table, Order],
  subscribers: [],
  migrations: [],
};

export const AppDataSource = new DataSource(databaseConfig);
3;
export const initDatabase = async () => {
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await client.connect();

  const res = await client.query(
    `SELECT 1 FROM pg_database WHERE datname = 'pos_db8'`,
  );
  if (res.rowCount === 0) {
    await client.query(`CREATE DATABASE "pos_db8"`);
    console.log('Database "pos_db8" created');

    await client.end();
  } else {
    console.log('Database "pos_db8" already exists');
    await client.end();
  }
};
