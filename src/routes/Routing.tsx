import React from 'react';
import { Router } from "react-router";

export const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/phone-otp" element={<PhoneOTPscreen />} />
      </Routes>
    </Router>
  );
};
