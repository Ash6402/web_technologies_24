import React from 'react'
import ReactDOM from 'react-dom/client'
import AppPage from './pages/AppPage'
import SignUpPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/auth/login' replace/>,
  }, 
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',      
        element: <SignUpPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
