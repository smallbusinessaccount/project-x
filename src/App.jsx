import Sidebar from './core/Sidebar'
import Header from './core/Header'
import Footer from './core/Footer'
import React from 'react';
import Organization from './core/sections/Organization'
import Dashboard from './core/sections/Dashboard'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import Users from './core/sections/Users';
import Credential from './core/sections/Credential';
import Settings from './core/sections/Settings';
import Logout from './core/sections/Logout';
import Help from './core/sections/Help';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <div className="p-4 sm:ml-56 sm:mt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/users" element={<Users />} />
            <Route path="/credential" element={<Credential />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
