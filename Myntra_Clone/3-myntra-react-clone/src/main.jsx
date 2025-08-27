import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import Home from "./routes/Home";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*loader: postLoader*/ },
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
