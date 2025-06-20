const mongoose = require("mongoose");

const TestimonialsSchema = mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Desc: {
    type: String,
    required: true,
  },
  CreationDate: {
    type: Date,
    default: Date.now(),
  },
  Rating: {
    type: Number,
    min: 1,
    max: 5,
    required: false,
  },
  Approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("testimonials", TestimonialsSchema);
