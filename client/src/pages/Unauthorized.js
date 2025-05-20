import React from 'react';

const Unauthorized = () => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold text-red-500">Unauthorized Access</h2>
      <p>You do not have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
