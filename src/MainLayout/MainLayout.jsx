import { element } from 'prop-types';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppliedJobs from '../components/AppliedJobs/AppliedJobs';
import Blog from '../components/Blog/Blog';
import AppliedSucces from '../components/FeaturedJobs/JobDetails/AppliedSucces/AppliedSucces';
import JobDetails from '../components/FeaturedJobs/JobDetails/JobDetails';
import Home from '../components/Home/Home';

import Statistics from '../components/Statistics/Statistics';
import Root from '../Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/applyJob/:id",
        element: <AppliedSucces></AppliedSucces>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;





