const express = require("express");
const Conn = require("./DatabaseConfig.js");
const Logger = require("./middleware/Logger.js");
const TestimonialRouter = require("./routes/TestimonialsRoute.js");
const AdminRouter = require("./routes/adminRoute.js");
const RateLimiter = require("./middleware/Limiter.js");
const ErrorHandler = require("./middleware/ErrorHandler.js");
const cors = require("cors");
require("dotenv").config();

const app = express();



// Middlware
app.use(express.json());
app.use(Logger);
app.use(cors())
// app.use(RateLimiter);

//Routes
app.use("/api/Testimonials", TestimonialRouter);
app.use("/api/auth", AdminRouter);

// Error Handler
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  Conn();
  console.log(`http://localhost:${process.env.PORT}`);
});
