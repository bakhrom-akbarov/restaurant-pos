import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { Box } from '../../components/Box';
import Table, { VirtualizedTableColumns } from '../../components/Table/Table';
import { Typography } from '../../components/Typography';
import { FINISH_ORDER, GET_ORDERS, Order } from '../../queries';

const columns: VirtualizedTableColumns<Order> = [
  { label: 'Order ID', dataKey: 'id', width: 100 },
  { label: 'Table', dataKey: 'table.name', width: 200 },
  { label: 'Total cost', dataKey: 'totalCost', width: 200 },
  {
    label: 'Created at',
    dataKey: 'createdAt',
    width: 200,
    render: (value) => new Date(value).toLocaleString(),
  },
  {
    label: 'Finished at',
    dataKey: 'finishedAt',
    width: 200,
    render: (value) => (value ? new Date(value).toLocaleString() : ''),
  },
];

const mealsColumns: VirtualizedTableColumns<Order['meals'][0]> = [
  { label: 'Meal ID', dataKey: 'id', width: 100 },
  { label: 'Quantity', dataKey: 'quantity', width: 100 },
  { label: 'Price', dataKey: 'price', width: 100 },
];

export const OrdersScreen = () => {
  const [order, setOrder] = useState<Order | null>(null);

  const handleRowClick = (row: Order) => {
    setOrder(row);
  };

  const { data } = useQuery(GET_ORDERS);

  const [finishOrder] = useMutation(FINISH_ORDER, {
    refetchQueries: [{ query: GET_ORDERS }],
  });

  const onFinishOrder = async () => {
    if (order) {
      await finishOrder({ variables: { id: order.id } });
      setOrder(null);
    }
  };

  return (
    <Box display="flex" w="100%" flexDirection="column">
      <Box flex={1} display="flex">
        <Box w={1000}>
          <Table
            columns={columns}
            data={data?.orders || []}
            onRowClick={handleRowClick}
          />
        </Box>
        <Box flex={1}>
          {order ? (
            <>
              {!order.finishedAt ? (
                <button onClick={onFinishOrder}>Finish order</button>
              ) : null}
              <Typography>Meals</Typography>
              <Table columns={mealsColumns} data={order ? order.meals : []} />
            </>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
