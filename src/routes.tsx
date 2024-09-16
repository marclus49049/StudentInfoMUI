import { createBrowserRouter } from "react-router-dom";
import ViewStudent from "./pages/view-student";
import Error from "./pages/error";
import AddStudent from "./pages/add-student";

export const router = createBrowserRouter([
  {
    path: "/view",
    element: <ViewStudent />,
    errorElement: <Error />,
  },
  {
    path: "/add",
    element: <AddStudent />,
    errorElement: <Error />,
  },
]);
