import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StudentContextProvider } from "./context/StudentContext";

function App() {
  return (
    <StudentContextProvider>
      <RouterProvider router={router} />
    </StudentContextProvider>
  );
}

export default App;
