import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";
import HomePage from "./components/HomePage";
import JobsDetail from "./components/JobsDetail";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/jobdetail/:jobId",
        element: <JobsDetail></JobsDetail>,
        loader: ()=>fetch('featured-jobs.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader:()=>fetch('/public/assignment.json'),
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader:()=> fetch('../public/featured-jobs.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
