import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="h-full w-full">
      <ToastContainer toastStyle={{ backgroundColor: "#1d1e27" }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
