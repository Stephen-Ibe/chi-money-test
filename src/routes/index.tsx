import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import { ToastContainer } from 'react-toastify';

const KickOff: FC = () => (
  <Router>
    <Suspense>
      <ToastContainer
        autoClose={1500}
        draggable={false}
        hideProgressBar
        closeButton={false}
      />

      <AppRoutes />
    </Suspense>
  </Router>
);

export default KickOff;
