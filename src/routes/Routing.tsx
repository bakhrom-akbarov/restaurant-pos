import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainRoute } from './MainRoute';

export const Routing = () => {
  console.log('Routing');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
