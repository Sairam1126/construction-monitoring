import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AlertLogList from './components/AI/AlertLogList';
import AlertRuleManager from './components/AI/AlertRuleManager';
import DetectionList from './components/AI/DetectionList';
import AdminPanel from './components/AdminPanel';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />
          <Route
            path="/alerts"
            element={<ProtectedRoute><AlertLogList /></ProtectedRoute>}
          />
          <Route
            path="/rules"
            element={<ProtectedRoute><AlertRuleManager /></ProtectedRoute>}
          />
          <Route
            path="/detections"
            element={<ProtectedRoute><DetectionList /></ProtectedRoute>}
          />
          <Route
            path="/adminpanel"
            element={<ProtectedRoute allowedRoles={['admin']}><AdminPanel /></ProtectedRoute>}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
