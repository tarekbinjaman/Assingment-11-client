import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/shared/Home/Home";
import Login from "../Pages/shared/Authentication/Login";
import Register from "../Pages/shared/Authentication/Register";
import Service from "../Pages/shared/Service/Service";
import AddService from "../Pages/AddService/AddService";

import Myservices from "../Pages/MyServices/Myservices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import UpdateJob from "../Pages/AddService/UpdateJob";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReview from "../Pages/MyReviews/MyReviews";

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
          element: 
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        },
        {
          path: "myReviews",
          element: 
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        },
        {
          path: "myServices",
          element:
          <PrivateRoute>
            <Myservices></Myservices>
          </PrivateRoute>
        },
        {
          path: "updateJob/:id",
          element: <UpdateJob></UpdateJob>,
          loader: ({params}) => fetch(`https://server-side-cyan-beta.vercel.app/services/${params.id}`)
        },
        {
          path: "services/:id",
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`https://server-side-cyan-beta.vercel.app/services/${params.id}`, {
            method: 'GET',
            credentials: 'include', // Include cookies in the request
        })
        },
      ]
    },
  ]);

  export default router;