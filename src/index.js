import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import InventarioAdd from './Components/InventarioAdd';
import Producto from './Components/Producto';
import Inventario from './Components/Inventario'
import ProductList from './Components/ProductList';
import AdminView from './Components/AdminView'


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
  },
      {
    path: "/inventario",
    element: <Inventario />,
  },
  {
    path: "/productos",
    element: <ProductList />,
  },
    {
    path: "/admin",
    element: <AdminView />,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


