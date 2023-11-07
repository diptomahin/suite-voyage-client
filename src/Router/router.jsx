import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from './../Pages/My Bookings/MyBookings';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/rooms",
            element:<Rooms></Rooms>
        },
        {
            path: "/myBookings",
            element:<MyBookings></MyBookings>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/register",
            element:<Register></Register>
        }
      ]
    },
  ]);



export default router;