import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Páginas
import Feed from './Feed/Feed'
import Post from './Post/Post'
import Edit from './Edit/Edit'




import './index.css'


import {createBrowserRouter, RouterProvider, Route, Navigate} from 'react-router-dom';


const router = createBrowserRouter([
  {
    element:<App />,
    children: [
      {
        path: "/",
        element: <Feed />,        
      },
      {
        path: "/post",
        element: <Post/>
      },
      {
        path: "/edit/:id",
        element: <Edit/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
