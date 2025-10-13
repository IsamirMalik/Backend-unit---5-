const rateLimit  = require('express-rate-limit');

// Configure the rate limiter
const limiter = rateLimit({
windowMs: 1 * 60 * 1000, // 15 minutes
max: 5, // Limit each IP to 100 requests per window
standardHeaders: true, // Enable RateLimit headers
legacyHeaders: false, // Disable X-RateLimit headers
});


module.exports = limiter;