import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <nav className="flex gap-4 mb-4">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
