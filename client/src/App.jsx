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
  Admin


} from './Pages'

import { action as registerAction} from './Pages/Register';

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
          action:registerAction
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
          children: [
            {
              index: true,
              element: <AddJob />
            },
            {
              path: 'stats',
              element: <Stats />,
            },
            {
              path: 'all-jobs',
              element: <AllJobs />
            },
            {
              path: 'profile',
              element: <Profile />
            },
            {
              path: 'admin',
              element: <Admin />
            },

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
