import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StudentContextProvider } from "./context/StudentContext";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <StudentContextProvider>
        <RouterProvider router={router} />
      </StudentContextProvider>
    </AppContextProvider>
  );
}

export default App;
