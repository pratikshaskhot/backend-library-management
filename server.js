require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Library Management System Backend Running",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});