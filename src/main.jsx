import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import FirstPage from './components/FirstPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ReportPet from './components/ReportPet.jsx'
import PostPage from './components/PostPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="found" replace="true" /> },
      {
        path: "/found",
        element: <FirstPage />,
      }, {
        path: "/found/:id",
        element: <PostPage />
      },
      {
        path: "/lost",
        element: <FirstPage />,
      }, {
        path: "/lost/:id",
        element: <PostPage />
      }, {
        path: "/login",
        element: <LoginPage />
      }, {
        path: "/create",
        element: <ProtectedRoute><ReportPet /></ProtectedRoute>
      }
    ],

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
)
