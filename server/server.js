// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Static file path
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI:", MONGO_URI);

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Route imports
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const detectionRoutes = require('./routes/detectionRoutes');
const aiRoutes = require('./routes/aiRoutes');
const alertRoutes = require('./routes/alertRoutes');

// ✅ Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/detections', detectionRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/alerts', alertRoutes);  // ✅ ALERT ROUTE

// ✅ Test root
app.get('/', (req, res) => {
  res.send('✅ Welcome to the Construction Site Monitoring API');
});

// ✅ Test this route FIRST
app.get('/check', (req, res) => {
  res.send('✅ Backend is working!');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
