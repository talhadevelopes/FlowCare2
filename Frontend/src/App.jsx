import { useState } from "react";
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Forum } from './components/Forum';
import { Blogs } from './components/Blogs';
import { Consultations } from './components/Consultations';
import "./App.css";

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
}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
