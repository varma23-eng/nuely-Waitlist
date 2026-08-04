const express = require("express");
const router = express.Router();
const { addToWaitlist } = require("../controllers/waitlistController");
const waitlistLimiter = require("../middleware/rateLimiter");

// Apply rate limiter and then the controller
router.post("/", waitlistLimiter, addToWaitlist);

module.exports = router;