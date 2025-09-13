import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './css/components.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { AuthState } from './context/AuthContext'

function App() {
  const { isAuthenticated } = AuthState()

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/auth" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App