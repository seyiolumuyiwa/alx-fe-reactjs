// src/components/Profile.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

function Profile() {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  )
}

export default Profile
