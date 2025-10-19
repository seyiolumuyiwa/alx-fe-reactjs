import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth' 

function ProtectedRoute({ children }) {
  const { user } = useAuth() 

  if (!user) {
    // Redirect to login if no authenticated user
    return <Navigate to="/login" replace />
  }

  // Render the protected content if user exists
  return children
}

export default ProtectedRoute
