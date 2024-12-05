import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { Landing } from "./components/Landing";
import Forum from "./components/Forum";
import { Blogs } from "./components/Blogs";
import AuthRequired from "./components/AuthRequired";
import { Consultations } from "./components/Consultations";
import { Login } from "./components/login";
import { Signup } from "./components/signup";
import { Tracker } from "./components/Tracker";
import { Ecom } from "./components/Ecom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/consultations",
    element: <Consultations />,
  },
  {
    path: "/tracker",
    element: <Tracker />,
  },
  {
    path: "/Ecom",
    element: <Ecom />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/AuthRequired",
    element: <AuthRequired />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
