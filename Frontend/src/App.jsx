import { useState } from "react";
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Forum } from './components/Forum';
import { Blogs } from './components/Blogs';
import { Consultations } from './components/Consultations';
import "./App.css";
import { Tracker } from "./Tracker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
},
{
  path: "/forum",
  element: <Forum />
},
{
  path: "/blogs",
  element: <Blogs />
},
{
  path: "/consultations",
  element: <Consultations />
},
{
  path: "/tracker",
  element: <Tracker />
}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
