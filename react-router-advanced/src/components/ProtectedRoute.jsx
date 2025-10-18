import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated authentication
const isAuthenticated = false; 

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    alert('You must be logged in to view this page!');
    return <Navigate to="/" replace />;
  }
  return children;
}
