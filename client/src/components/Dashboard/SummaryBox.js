import React from 'react';

const SummaryBox = ({ title, value, icon, color }) => {
  return (
    <div className={`rounded-2xl shadow-md p-4 text-white ${color} flex items-center justify-between`}>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="text-4xl">{icon}</div>
    </div>
  );
};

export default SummaryBox;
