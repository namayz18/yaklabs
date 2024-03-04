import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../controllers/home/home';

export const router = createBrowserRouter([
  {
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <div>Page not found</div>,
      },
    ],
  },
]);
