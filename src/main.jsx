import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx";
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:'/',element:<HomePage/>
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",element:<DashboardPage/>
          },
          {
            path:"/dashboard/chats/:id",element:<ChatPage/>
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
