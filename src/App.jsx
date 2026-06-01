import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Identity from "./pages/Identity";
import Card from "./pages/Card";
import Wallet from "./pages/Wallet";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/card" element={<Card />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
