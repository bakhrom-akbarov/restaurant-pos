import cors from 'cors'; // Import the cors middleware
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';

import 'reflect-metadata';

import { OrderResolver } from './resolvers/orderResolver.js';
import { TableResolver } from './resolvers/tableResolver.js';
import { AppDataSource, initDatabase } from './ormconfig.js';

const main = async () => {
  // Initialize the database
  await initDatabase();

  // Initialize TypeORM
  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers: [TableResolver, OrderResolver],
  });

  const app = express();

  // Use cors middleware
  app.use(cors());

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000/graphql');
  });
};

main().catch((err) => console.error(err));
