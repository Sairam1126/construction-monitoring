import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetectionList = () => {
  const [detections, setDetections] = useState([]);

  useEffect(() => {
    axios.get('/api/detections')
      .then(res => setDetections(res.data))
      .catch(err => console.error('Error fetching detections:', err));
  }, []);

  return (
    <div className="ml-64 mt-20 p-6">
      <h2 className="text-2xl font-bold mb-4">Detections</h2>
      <ul className="space-y-2">
        {detections.map(d => (
          <li key={d._id} className="bg-white p-4 shadow rounded">
            <strong>{d.label}</strong> - {d.confidence} @ <a href={d.imageUrl} className="text-blue-600 underline" target="_blank" rel="noreferrer">Image</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetectionList;
