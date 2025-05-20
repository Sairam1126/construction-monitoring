import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        🏗️ Welcome to Construction Site Monitoring
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
        Monitor AI detection alerts, safety violations, and maintain compliance with real-time logs and rules management.
      </p>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
