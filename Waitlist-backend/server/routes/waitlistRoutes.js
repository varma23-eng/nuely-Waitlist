const express = require("express");
const router = express.Router();

const { addToWaitlist } = require("../controllers/waitlistController");
const waitlistLimiter = require("../middleware/rateLimiter");

router.post("/", waitlistLimiter, addToWaitlist);

module.exports = router;