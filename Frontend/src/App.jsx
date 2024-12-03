import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { Landing } from "./components/Landing";
import { Forum } from "./components/Forum";
import { Blogs } from "./components/Blogs";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
