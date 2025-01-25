
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Components/Route';
import Login from './Components/Login';
import Home from './Components/Home';
import Addcraft from './Components/Addcraft';
import Allartandcraft from './Components/Allartandcraft';
import Mycart from './Components/Mycart';
import Register from './Components/Register';
import Authprovider from './Components/Authprovider';
import Beforeallart from './Components/Beforeallart';
import Update from './Components/Update';
import ViewDetails from './Components/ViewDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addcraft',
        element: <Addcraft></Addcraft>
      },
      {
        path: '/allartandcraft',
        element: <Allartandcraft></Allartandcraft>,
        loader:()=>fetch('http://localhost:5000/user')
      },
      {
        path:'/before',
        element:<Beforeallart></Beforeallart>,
        loader:()=>fetch('http://localhost:5000/user')
      },
      {
        path: '/mycart',
        element: <Mycart />,
        loader:()=>fetch(`http://localhost:5000/order`)
    },
     
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/user/${params.id}`)
      },
      {
        path:'/viewdetails/:id',
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>fetch(`http://localhost:5000/user/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
);
