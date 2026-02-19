import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ProjectDetail from "./routes/ProjectDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}