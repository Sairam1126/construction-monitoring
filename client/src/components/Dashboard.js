import React from 'react';

const Dashboard = () => {
  return (
    <div className="ml-64 mt-20 p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h3 className="text-xl font-semibold">Total Detections</h3>
          <p className="text-3xl text-blue-600 mt-2">123</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h3 className="text-xl font-semibold">High Severity Alerts</h3>
          <p className="text-3xl text-red-600 mt-2">7</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h3 className="text-xl font-semibold">Users</h3>
          <p className="text-3xl text-green-600 mt-2">10</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
