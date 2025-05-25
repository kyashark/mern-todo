const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Import routes
const taskRoutes = require('./routes/TaskRoutes');

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to MongoDB

// Middleware
const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/api/tasks', taskRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));