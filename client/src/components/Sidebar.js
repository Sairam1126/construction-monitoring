import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white fixed top-16 left-0 p-4">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="hover:text-yellow-300">🏠 Dashboard</Link></li>
        <li><Link to="/alerts" className="hover:text-yellow-300">🚨 Alert Logs</Link></li>
        <li><Link to="/rules" className="hover:text-yellow-300">📋 Alert Rules</Link></li>
        <li><Link to="/detections" className="hover:text-yellow-300">🧠 Detections</Link></li>
        <li><Link to="/adminpanel" className="hover:text-yellow-300">⚙️ Admin Panel</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
