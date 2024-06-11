import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Menu } from '../../components/Menu/Menu';
import { ArrowLeftIcon } from '../../icons/ArrowLeftIcon';
import { SidebarLayout } from '../../layouts/SidebarLayout/SidebarLayout';

const Sidebar = () => {
  return (
    <Menu
      items={[
        { label: 'Home', to: '/', icon: ArrowLeftIcon },
        {
          label: 'About',
          to: '/about',
          icon: ArrowLeftIcon,
          items: [
            { label: 'About 1', to: '/about/1', icon: ArrowLeftIcon },
            { label: 'About 2', to: '/about/2', icon: ArrowLeftIcon },
          ],
        },
        { label: 'Contact', to: '/contact', icon: ArrowLeftIcon },
      ]}
    />
  );
};

export const MainRoute = () => {
  return (
    <SidebarLayout sidebar={<Sidebar />}>
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="about/1" element={<div>About 1</div>} />
        <Route path="about/2" element={<>About 2</>} />
        <Route path="contact" element={<>Contact</>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </SidebarLayout>
  );
};
