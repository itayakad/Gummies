import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Recommendations from './pages/Recommendations';
import About from './pages/About';
import Login from './pages/Login'; // Corrected import path
import TestBackend from './pages/TestBackend'; // Import the backend test component
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <div className="header-top">
          <NavLink to="/login" className="account-link">
            <i className="fas fa-user"></i> Account
          </NavLink>
        </div>
        <div className="header-content">
          <h1>Personalized Gummies</h1>
          <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Home
            </NavLink>
            <NavLink to="/quiz" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Quiz
            </NavLink>
            <NavLink to="/recommendations" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Recommendations
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              About
            </NavLink>
            <NavLink to="/test-backend" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Test Backend
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} /> {/* Added and corrected the Login route */}
          <Route path="/test-backend" element={<TestBackend />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Personalized Gummies</p>
      </footer>
    </Router>
  );
}

export default App;
