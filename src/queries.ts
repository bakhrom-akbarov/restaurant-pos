import { gql } from '@apollo/client';

export const GET_TABLES = gql`
  query GetTables {
    tables {
      id
      name
      seats
      available
    }
  }
`;

export type Order = {
  id: string;
  tableId: string;
  createdAt: string;
  finishedAt: string;
  table: {
    name: string;
  };
  meals: {
    id: string;
    quantity: number;
    price: number;
  }[];
};

export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      tableId
      createdAt
      finishedAt
      totalCost
      table {
        name
      }
      meals {
        id
        quantity
        price
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder($tableId: String!, $meals: [MealInputType!]!) {
    createOrder(tableId: $tableId, meals: $meals) {
      tableId
      meals {
        id
        quantity
        price
      }
    }
  }
`;

export const FINISH_ORDER = gql`
  mutation FinishOrder($id: String!) {
    finishOrder(id: $id)
  }
`;

// Define interface for table structure
export interface TableObject {
  id: string;
  name: string;
  seats: number;
  available: boolean;
}
