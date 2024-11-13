import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Recommendations from './pages/Recommendations';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Personalized Gummies</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Personalized Gummies</p>
      </footer>
    </Router>
  );
}

export default App;
