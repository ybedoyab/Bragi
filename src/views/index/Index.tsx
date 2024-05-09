import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      Index
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Index;
