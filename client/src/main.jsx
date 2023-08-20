import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Library from "./pages/Library";
import NewPost from "./pages/NewPost";
import PostDetails from "./pages/PostDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/library/content",
    element: <Library />,
  },
  {
    path: "/create-post",
    element: <NewPost />,
  },
  {
    path: "/library/content/:contentId",
    element: <PostDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
