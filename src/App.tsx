import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="h-full w-full flex bg-secondary overflow-hidden">
      <ToastContainer toastStyle={{ backgroundColor: "#1d1e27" }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
