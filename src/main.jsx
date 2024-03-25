import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Statistics from './components/Statistics/Statistics'
import Applied_jobs from './components/Applied_jobs/Applied_jobs'
import Blog from './components/Blog/Blog'
import Job_Details from './components/Job_Details/Job_Details'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/Applied_Jobs',
        element:<Applied_jobs></Applied_jobs>,
        loader:()=> fetch('jobs.json')
      },
      {
        path:'/Blog',
        element:<Blog></Blog>
      },
      {
        path:'/Details/:id',
        element:<Job_Details></Job_Details>,
        loader:()=> fetch('../jobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
