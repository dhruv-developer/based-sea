import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SkillAssessment from './pages/SkillAssessment';
import Learning from './pages/Learning';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assessment" element={<SkillAssessment />} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;