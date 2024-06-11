import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Menu } from '../components/Menu/Menu';
import { AddIcon } from '../icons/AddIcon';
import { ReserveIcon } from '../icons/ReserveIcon';
import { SidebarLayout } from '../layouts/SidebarLayout/SidebarLayout';
import { NewOrderScreen } from '../screens/NewOrder/NewOrderScreen';
import { OrdersScreen } from '../screens/Orders/OrdersScreen';

const Sidebar = () => {
  return (
    <Menu
      items={[
        { label: 'Orders', to: '/', icon: ReserveIcon },
        { label: 'New order', to: '/newOrder', icon: AddIcon },
      ]}
    />
  );
};

export const MainRoute = () => {
  return (
    <SidebarLayout sidebar={<Sidebar />}>
      <Routes>
        <Route index element={<OrdersScreen />} />
        <Route path="newOrder" element={<NewOrderScreen />} />
      </Routes>
    </SidebarLayout>
  );
};
