import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/shared/Home/Home";
import Login from "../Pages/shared/Authentication/Login";
import Register from "../Pages/shared/Authentication/Register";
import Service from "../Pages/shared/Service/Service";
import AddService from "../Pages/AddService/AddService";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Myservices from "../Pages/MyServices/Myservices";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>Route Not Found</h1>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path:"registration",
          element: <Register></Register>
        },
        {
          path: "service",
          element: <Service></Service>
        },
        {
          path: "addService",
          element: <AddService></AddService>
        },
        {
          path: "myReviews",
          element: <MyReviews></MyReviews>
        },
        {
          path: "myServices",
          element: <Myservices></Myservices>
        }
      ]
    },
  ]);

  export default router;