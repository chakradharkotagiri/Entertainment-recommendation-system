import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [contentType, setContentType] = useState("Music");
  console.log(contentType);
  return (
    <div className=" bg-gradient-to-b from-[#17092d] from-5% to-[#0b061d] to-30% overflow-y-scroll no-scrollbar">
      <BrowserRouter>
        <Navbar contentType={contentType} setContentType={setContentType} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Body contentType={contentType} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
