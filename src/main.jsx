import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Todos from "./components/Todos.jsx";
import axios from "../utils/Axios.js";
import NotFound from "./components/NotFound.jsx";
import "./index.css";
import UpdateTodos from "./components/UpdateTodos.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => axios.get("/todos"),
      },
      {
        path: "/todos",
        element: <Todos />,
        loader: () => axios.get("/todos"),
      },

      {
        path: "/edit/:id",
        element: <UpdateTodos />,
        loader: ({ params }) => axios.get(`/todos/${params.id}`),
      },
    ],
    errorElement:<NotFound/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
