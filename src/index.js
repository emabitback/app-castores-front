import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import InventarioAdd from './InventarioAdd';
import Producto from './Producto';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addproduct",
    element: <Producto />,
  },
    {
    path: "/addinventary",
    element: <InventarioAdd />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


