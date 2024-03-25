import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import PageToRead from './Pages/PageToRead.jsx'
import ListedBooks from './Pages/ListedBooks.jsx'
import MainLayouts from './Layouts/MainLayouts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/data.json')
      },
      {
        path: '/ListedBook',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pageToRead',
        element: <PageToRead></PageToRead>
      }
    ],
  },
 

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
