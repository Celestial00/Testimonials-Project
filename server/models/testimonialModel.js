const mongoose = require("mongoose");

const TestimonialsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: false,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("testimonials", TestimonialsSchema);
