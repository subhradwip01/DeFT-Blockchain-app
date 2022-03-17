import React from "react";
import {
  Navbar,
  Footer,
  Transactions,
} from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="min-hscreen">
      <div className="bg-[#F6F0F5]">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="transactions" element={<Transactions/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
