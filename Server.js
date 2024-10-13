const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const todoRoutes = require("./routes/ToDoRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error('Connection error:', err));

app.get("/", (req, res) => {
    res.send("Welcome to the To-Do API");
});

app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));