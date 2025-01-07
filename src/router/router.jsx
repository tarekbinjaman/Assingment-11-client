import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/shared/Home/Home";
import Login from "../Pages/shared/Authentication/Login";
import Register from "../Pages/shared/Authentication/Register";
import Service from "../Pages/shared/Service/Service";

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
      ]
    },
  ]);

  export default router;