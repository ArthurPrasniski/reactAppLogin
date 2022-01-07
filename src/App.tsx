import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/routes";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;
