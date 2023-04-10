import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <HomePage></HomePage>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path:"/blog",
        element: <Blog></Blog>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
