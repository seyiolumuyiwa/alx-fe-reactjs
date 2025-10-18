import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//  Import React Router components
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Import pages/components
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import BlogPost from './components/BlogPost'

//  Simulated authentication status
const isAuthenticated = true

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" />
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        {/* Original Vite + React UI */}
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React (Advanced Routing)</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        {/*React Router Configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/*Protected Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/*Nested Routes inside Profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/*Dynamic Route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/*Fallback Route */}
          <Route
            path="*"
            element={
              <h2 className="text-center text-red-500 mt-10">
                404 - Page Not Found
              </h2>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
