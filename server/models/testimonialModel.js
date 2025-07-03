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
  ratings: [
    {
      name: { type: String, required: true },
      desc: { type: String, required: true },
      score: { type: Number, min: 1, max: 6, required: true },
    },
  ],
  showData:{
    type: Boolean,
    default: false,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("testimonials", TestimonialsSchema);
