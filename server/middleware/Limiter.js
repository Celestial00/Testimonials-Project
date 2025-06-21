const limiter = require("express-rate-limit");

const RateLimiter = limiter({
  windowMS: 15 * 60 * 1000,
  max: 20,
  message: {
    status: 429,
    error: "too many request wait for 15 minutes",
  },
});

module.exports = RateLimiter;
