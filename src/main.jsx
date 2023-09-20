import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import route from './Route/Route'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MyRoute from './Route/Route'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import myRoute from './Route/Route'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <MainLayout></MainLayout>,
//     children:[
//       {
//         path:'/',
//         element: <Home></Home>
//       },
//       {
//         path:'/product',
//         element: <Products></Products>
//       }
//     ]
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myRoute}></RouterProvider>
  </React.StrictMode>,
)
