import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div className=" bg-gradient-to-b from-[#17092d] from-5% to-[#0b061d] to-30% overflow-y-scroll">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
