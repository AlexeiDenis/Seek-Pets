import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import FirstPage from './components/FirstPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element:<Navigate to="found" replace="true"/> },
      {
        path: "/found",
        element: <FirstPage />,
      },
      {
        path: "/lost",
        element: <FirstPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
)
