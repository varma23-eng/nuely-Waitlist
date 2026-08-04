const express = require("express");
const cors = require("cors");
const waitlistRoutes = require("./routes/waitlistRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/waitlist", waitlistRoutes);

module.exports = app;