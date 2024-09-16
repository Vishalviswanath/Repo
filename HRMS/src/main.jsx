import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AuthPages from './auth/AuthPages.jsx';
import Login from './auth/Login.jsx';
import Signup from './auth/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'home', element: <Home /> }],
  },
  {
    path: '/auth',
    element: <AuthPages />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Signup /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
