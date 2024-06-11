# Restaurant POS system

# Notes:
This is the project that was built in a hurry, so there are some things that could be improved. 
#### For example:
- the error handling
- the way the database is connected
- the way the tables are created
- meals were hardcoded according to the instructions, but it would be better to have them in the database as a separate table.
- separate many-to-many table for order and meals. (FK: order_id, meal_id, quantity, price). Price should be stored to know the price at the time of the order, as the price of the meal can change.
- Separate backend and frontend into two separate projects (repos).
- Caching layer on the server side to reduce the number of requests to the database. (Redis or Memcached)
- Add tests (unit, integration, e2e)
- Dockerize the project if containerization is needed.
- Deploy and setup HTTPS to secure the connection.
- Add authentication and authorization.
- Add logging.
- Add monitoring.
- Add CI/CD pipeline.
- Add a feature to split the bill.
- Add a feature to add a discount.
- Add a feature to add a tip.
- Add a feature to add extras.
- Add a feature to add a comment.
- Add a feature to add a reservation.
- Add a feature to add a waiter.
- I prefer to use RAW SQL queries, because it gives me more control over the queries, better performance and I can optimize them better. But in this case, I used TypeORM to show that I can use it as well. From the development perspective, using ORM is faster and easier, but it has some limitations and it's not as flexible as RAW SQL queries.

# Steps to run the project:
1. Clone the repository
2. Make sure you have Node.js (v18.18.0 or higher), Yarn, PostgreSQL (14 or higher) installed on your machine
3.Run the following command to install the dependencies:
```bash
yarn install
```
4. Create a .env file in the root directory and add the following environment variables:
```bash
NODE_ENV=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
```
5. Run the following command to start the server:
```bash
yarn start:server
```
6. Run the following command to start the client:
```bash
yarn start
```
7. Open your browser and navigate to http://localhost:4000/graphql to access the GraphQL playground and insert tables into the database by the following mutation:
```graphql
mutation {
  createTable(name: "Table 1", seats: 7) {
    name,
    seats
  }
}
```
8. Transaction isolation level is set to 'SERIALIZABLE'. This means that if two transactions try to update the same row at the same time, one of them will be blocked until the other one finishes. This is to prevent the "lost update" problem.
9. While building a real-world application, ACID principles should be followed to ensure data integrity and consistency.
