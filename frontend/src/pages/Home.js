import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/quiz');
  };

  return (
    <div className="home">
      <h2>Welcome to Personalized Gummies</h2>
      <p>Get a personalized daily gummy supplement pack tailored to your health needs!</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}

export default Home;
