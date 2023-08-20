import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Library, { loader as libraryLoader } from "./pages/Library";
import NewPost, { action as newPostAction } from "./pages/NewPost";
import PostDetails, { loader as postDatailsLoader } from "./pages/PostDetails";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/library/content",
        element: <Library />,
        loader: libraryLoader,
      },
    ],
  },

  {
    path: "/create-post",
    element: <NewPost />,
    action: newPostAction,
  },
  {
    path: "/library/content/:contentId",
    element: <PostDetails />,
    loader: postDatailsLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
