import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Components/Route';
import Login from './Components/Login';
import Registter from './Components/Registter';
import Home from './Components/Home'
import Addcraft from './Components/Addcraft';
import Allartandcraft from './Components/Allartandcraft';
import Mycart from './Components/Mycart';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Route></Route>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registter></Registter>
      },
      {
        path:'/addcraft',
        element:<Addcraft></Addcraft>
      },
      {
        path:'/allartandcraft',
        element:<Allartandcraft></Allartandcraft>
      },
      {
        path:'/mycart',
        element:<Mycart></Mycart>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
