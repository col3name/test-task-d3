import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

import {getToken, isExpiredToken} from './shared/services/auth/utils';
import RequireAuth from "./widgets/auth/RequireAuth";

function App() {
  const token = getToken();
  const isExpired = isExpiredToken(token);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  path="/login" element={<Login isExpired={isExpired} />} />
          <Route path="/dashboard" element={<RequireAuth>
            <Dashboard />
          </RequireAuth>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
