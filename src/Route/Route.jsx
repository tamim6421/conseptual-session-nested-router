import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import ProductsDetails from '../Pages/Products/ProductsDetails';
import DashBoard from '../Pages/Dashboard.jsx/DashBoard';
import Deshed from '../Pages/Dashboard.jsx/Deshed';
import Profile from '../Pages/Dashboard.jsx/Profile/Profile';
import EditProfile from '../Pages/Dashboard.jsx/EditProfile/EditProfile';

const myRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path:'/products',
                element:<Products></Products>,
                loader: ()=> fetch('https://dummyjson.com/products'),
            },
            {
                path:'/product/:id',
                element:<ProductsDetails></ProductsDetails>,
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path:'/dashboard',
                element: <DashBoard></DashBoard>,
                children:[
                    {
                    path:'/dashboard',
                    element:<Deshed></Deshed>
                    },
                    {
                        path:'/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path:'/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ]
                
            }
        ]
    }
])

// const router = createBrowserRouter([
//     {
//       path:'/',
//       element: <MainLayout></MainLayout>,
//       children:[
//         {
//           path:'/',
//           element: <Home></Home>
//         },
//         {
//           path:'/product',
//           element: <Products></Products>
//         }
//       ]
//     }
//   ])
  

export default myRoute;