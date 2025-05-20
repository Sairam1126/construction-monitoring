// components/AI/AlertLogList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlertLogList = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/alerts/logs')
      .then(res => setLogs(res.data))
      .catch(err => console.error('Error fetching alert logs:', err));
  }, []);

  return (
    <div>
      <h2>Alert Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log._id}>
            🛑 <strong>{log.message}</strong><br />
            <small>{new Date(log.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertLogList;