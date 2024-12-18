const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const managerRoutes = require('./routes/managerRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const progressRoutes = require('./routes/progressRoutes');
const authenticateToken = require('./middleware/authenticateToken');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Apply JWT middleware globally except for /api/auth
app.use(authenticateToken);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/manager', managerRoutes);
app.use('/api/candidate', candidateRoutes);
app.use('/api/progress', progressRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
