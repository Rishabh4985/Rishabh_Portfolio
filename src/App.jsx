import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Skills" element={<SkillsPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
