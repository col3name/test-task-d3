import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './widgets/auth/RequireAuth';
import NotificationsList from './widgets/Notifications/Notifications';

import {getToken, isExpiredToken} from './shared/services/auth/utils';

function App() {
  const token = getToken();
  const isExpired = isExpiredToken(token);
  return (
    <BrowserRouter>
      <div className="App" onClick={ () => {
        throw Error('Unhandled error');
      }}>
        <Routes>
          <Route path="/login" element={<Login isExpired={isExpired} />} />
          <Route path="/dashboard" element={<RequireAuth>
            <Dashboard />
          </RequireAuth>} />
          <Route path='*' element={<Navigate to={isExpired ? '/login' : '/dashboard'} replace />} />
        </Routes>
        <NotificationsList />
      </div>
    </BrowserRouter>
  );
}

export default App;
