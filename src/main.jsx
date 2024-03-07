import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import { data } from './assets/data.js'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FilterProduct from './pages/FilterProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root data={data} />,
    children: [
      {
        path: '',
        element: <Home/>,
      },
      {
        path: 'product-detail/:id',
        element: <ProductDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'category/:category',
        element: <FilterProduct />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
