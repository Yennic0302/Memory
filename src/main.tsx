import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MemoryBg from "./components/MemoryBg";
import NavBar from "./components/NavBar";
import ContextProvider from "./context/ContextProvider";
import "./index.css";
import Memory from "./routes/memory";
import Root from "./routes/root";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/playing",
    element: <Memory />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <NavBar />
      <div className="wrapper">
        <MemoryBg />
        <RouterProvider router={router} />
      </div>
    </ContextProvider>
  </React.StrictMode>
);
