import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import InnerApp from "./InnerApp";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Slices/MoviesStore";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNavigation from "./components/RootNavigation";
import GridComponent from "./components/GridComponent";
import Employees from "./components/Employees";
import Videoplayer from "./components/Videoplayer";
import EData from "./components/EData";
import { fetchEmps } from "./components/Employees";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootNavigation />,
    children: [
      { index: true, element: <Header /> },
      { path: "/movies", element: <GridComponent /> },
      { path: "/employees", element: <Employees />, loader: fetchEmps },
      { path: "/video/:image", element: <Videoplayer /> },
      {
        path: "/edata",
        element: <EData />,
        loader: async () => {
          const response = await fetch(`https://localhost:7175/List`);
          return await response.json();
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}>
        <InnerApp />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
