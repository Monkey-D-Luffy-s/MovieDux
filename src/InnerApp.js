import React from "react";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videoplayer from "./components/Videoplayer";

const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/video", element: <Videoplayer /> },
]);
function InnerApp() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default InnerApp;
