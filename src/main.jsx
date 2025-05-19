import ReactDOM from "react-dom/client"
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
