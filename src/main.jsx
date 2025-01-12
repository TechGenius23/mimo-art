
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
        element: <Allartandcraft></Allartandcraft>
        
      },
      {
        path:'/before',
        element:<Beforeallart></Beforeallart>,
        loader:()=>fetch('http://localhost:5000/user')
      },
      {
        path: '/mycart',
        element: <Mycart></Mycart>
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
