import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './widgets/auth/RequireAuth';

import {getToken, isExpiredToken} from './shared/services/auth/utils';

function App() {
  const token = getToken();
  const isExpired = isExpiredToken(token);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login isExpired={isExpired} />} />
          <Route path="/dashboard" element={<RequireAuth>
            <Dashboard />
          </RequireAuth>} />
          <Route path='*' element={<Navigate to={isExpired ? '/login' : '/dashboard'} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
