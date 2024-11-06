const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
const authkanpurRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const negotiationRoutes = require('./routes/negotiationRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/negotiation', negotiationRoutes);
app.use('/ai', aiRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
