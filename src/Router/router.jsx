import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from './../Pages/My Bookings/MyBookings';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import PrivetRoute from "./privateRoute";
import Update from "../Pages/Update/Update";
import Review from "../Pages/Review/Review";


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
            element:<Rooms></Rooms>,
            loader :()=> fetch('https://suite-voyage-server-ij9ribipj-mahin-ahmeds-projects.vercel.app/rooms')
        },
        {
            path: "/rooms/:id",
            element:<RoomDetails></RoomDetails>,
            loader :({params})=> fetch(`https://suite-voyage-server-ij9ribipj-mahin-ahmeds-projects.vercel.app/rooms/${params.id}`)
        },
        {
            path: "/myBookings",
            element:<PrivetRoute><MyBookings></MyBookings></PrivetRoute>
        },
        {
            path: "/update/:id",
            element:<PrivetRoute><Update></Update></PrivetRoute>,
           
        },
        {
            path: "/review/:id",
            element:<PrivetRoute><Review></Review></PrivetRoute>,
           
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