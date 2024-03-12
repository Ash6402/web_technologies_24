import React from 'react'
import ReactDOM from 'react-dom/client'
import AppPage from './pages/AppPage'
import SignUp from './pages/auth/SignupPage'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppPage />,
  }, 
  {
    path: '/auth/signup',
    element: <SignUp />

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
