const express = require("express");
const Conn = require("./DatabaseConfig.js");
const Logger = require("./middleware/Logger.js");

const TestimonialRouter = require("./routes/TestimonialsRoute.js");
const AdminRouter = require("./routes/adminRoute.js");
const DeptRouter = require("./routes/DeptRoute.js");
const RateLimiter = require("./middleware/Limiter.js");
const ErrorHandler = require("./middleware/ErrorHandler.js");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Serve frontend build

// Middleware
app.use(express.json());
app.use(cors());
app.use(Logger);
// app.use(RateLimiter);

// Routes

app.use("/api/Testimonials", TestimonialRouter);
app.use("/api/auth", AdminRouter);
app.use("/api/dept", DeptRouter);

app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  Conn();
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
