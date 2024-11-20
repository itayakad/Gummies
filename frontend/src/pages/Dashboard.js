import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <h1>Welcome to Your Dashboard!</h1>
      <p>This is where your personalized vitamin plan will appear.</p>
      <button onClick={handleLogout}>Logout</button> {/* Added logout button */}
    </div>
  );
};

export default Dashboard;
