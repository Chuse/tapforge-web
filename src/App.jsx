import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}