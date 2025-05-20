import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlertRuleManager = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    axios.get('/api/alerts/rules')
      .then(res => setRules(res.data))
      .catch(err => console.error('Error fetching rules:', err));
  }, []);

  return (
    <div className="ml-64 mt-20 p-6">
      <h2 className="text-2xl font-bold mb-4">Alert Rules</h2>
      <ul className="space-y-2">
        {rules.map(rule => (
          <li key={rule._id} className="bg-white p-4 shadow rounded">
            <strong>{rule.name}</strong> - {rule.eventType} ({rule.severity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertRuleManager;
