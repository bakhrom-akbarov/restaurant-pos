import React, { useCallback } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Form, Formik } from 'formik';
import styled from 'styled-components';

import { Box } from '../../components/Box';
import Table from '../../components/Table/Table';
import { Typography } from '../../components/Typography';
import { CREATE_ORDER, GET_TABLES, TableObject } from '../../queries';

import { MenuList } from './MenuList/MenuList';

const tablesColumns = [
  { label: 'Table ID', dataKey: 'id', width: 100 },
  { label: 'Table Name', dataKey: 'name', width: 200 },
  { label: 'Seats', dataKey: 'seats', width: 200 },
];

export const menuItems = [
  { id: 1, name: 'Burger', price: 6 },
  { id: 2, name: 'Pizza', price: 8 },
  { id: 3, name: 'Pasta', price: 7 },
  { id: 4, name: 'Salad', price: 4 },
  { id: 5, name: 'Soup', price: 3 },
  { id: 6, name: 'Steak', price: 14 },
  { id: 7, name: 'Fish', price: 12 },
  { id: 8, name: 'Chicken', price: 10 },
  { id: 9, name: 'Soda', price: 1 },
  { id: 10, name: 'Dessert', price: 4 },
];

type InitialValues = {
  table_id: number | null;
  meals: { id: number; quantity: number; price: number }[];
};

const initialValues: InitialValues = {
  table_id: null,
  meals: [],
};

const StickyFooter = styled.div`
  position: sticky;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #ddd;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewOrderScreen = () => {
  const { data } = useQuery(GET_TABLES);

  const [createOrder] = useMutation(CREATE_ORDER);

  const onSubmit = useCallback(
    async (values: InitialValues) => {
      try {
        const meals = values.meals.map((meal) => ({
          id: meal.id,
          quantity: meal.quantity,
          price: meal.price,
        }));
        const { data } = await createOrder({
          variables: { tableId: values.table_id, meals },
          refetchQueries: [{ query: GET_TABLES }], // Refetch tables after creating the order
        });
        console.log('Order created:', data.createOrder);
      } catch (error) {
        console.error('Error creating order:', error);
      }
    },
    [createOrder],
  );

  // Check if data and data.tables exists before filtering and filtering available tables
  const availableTables = (data?.tables || []).filter(
    (table: TableObject) => table.available,
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, setFieldValue }) => {
        const total = values.meals.reduce((acc, meal) => {
          const item = menuItems.find((item) => item.id === meal.id);
          return acc + (item ? item.price * meal.quantity : 0);
        }, 0);

        return (
          <Form>
            <Box display="flex" flexDirection="column" h="100vh">
              <Box flex={1} display="flex">
                <Box flex={1}>
                  <Typography pb={20} as="div" type="display" size="xs">
                    Select table
                  </Typography>
                  <Table
                    columns={tablesColumns}
                    data={availableTables}
                    onRowClick={(row) => {
                      setFieldValue('table_id', row.id);
                    }}
                  />
                </Box>
                <Box flex={1}>
                  <Typography pb={20} as="div" type="display" size="xs">
                    Select meal(s)
                  </Typography>
                  <MenuList name="meals" items={menuItems} />
                </Box>
              </Box>
              <StickyFooter>
                <Typography size="md">Total: ${total.toFixed(2)}</Typography>
                <button type="submit">Submit</button>
              </StickyFooter>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
