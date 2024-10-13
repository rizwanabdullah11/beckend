const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');
const todoRoutes = require('./Routes/todoRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
