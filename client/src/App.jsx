import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Homelayout,
  Landing,
  Register,
  Login,
  Dashboard,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  Editjob,


} from './Pages'

import { action as registerAction } from './Pages/Register';
import { action as loginAction } from './Pages/Login';
import { loader as dashboardLoader } from './Pages/Dashboard';
import { action as addJobAction } from './Pages/Addjob';
import { loader as allJobsLoader } from './Pages/AllJobs';
import { loader as editJobLoader } from './Pages/Editjob';
import { action as editJobAction } from './Pages/Editjob';
import { action as deleteAction } from './Pages/DeleteJob';
import { loader as adminLoader } from './Pages/Admin';
import { action as profileAction } from './Pages/Profile'
import { loader as statsLoader } from './Pages/Stats'
  ;


export const checkdefaulttheme = () => {
  const darktheme = localStorage.getItem('darktheme') === 'true';
  document.body.classList.toggle('dark-theme', darktheme);
  return darktheme
}

checkdefaulttheme()

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Homelayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />
        },

        {
          path: 'register',
          element: <Register />,
          action: registerAction
        },
        {
          path: 'login',
          element: <Login />,
          action: loginAction
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
          loader: dashboardLoader,
          children: [
            {
              index: true,
              element: <AddJob />,
              action: addJobAction
            },
            {
              path: 'stats',
              element: <Stats />,
              loader: statsLoader
            },
            {
              path: 'all-jobs',
              element: <AllJobs />,
              loader: allJobsLoader
            },
            {
              path: 'profile',
              element: <Profile />,
              action: profileAction
            },
            {
              path: 'admin',
              element: <Admin />,
              loader: adminLoader
            },
            {
              path: 'edit-job/:id',
              element: <Editjob />,
              action: editJobAction,
              loader: editJobLoader
            },
            {
              path: 'delete-job/:id',

              action: deleteAction
            }

          ]
        },
      ],
    },


  ],

);

const App = () => {


  return (
    <RouterProvider router={router} future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }} />
  )
}

export default App
