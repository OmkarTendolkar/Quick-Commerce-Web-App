import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root, Home, ProductDetail, Cart, FilterProduct, SearchProducts } from './index.js'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
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
      },
      {
        path: 'search/:query',
        element: <SearchProducts />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
