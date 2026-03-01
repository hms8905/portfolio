import { Routes, Route } from "react-router-dom";
import { HomePage, ProjectDetailPage } from "@/pages";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
    </Routes>
  );
}