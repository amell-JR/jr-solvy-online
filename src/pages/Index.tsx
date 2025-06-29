
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to Home component instead of showing placeholder content
  return <Navigate to="/" replace />;
};

export default Index;
