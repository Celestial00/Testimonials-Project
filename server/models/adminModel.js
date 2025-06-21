const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  handle: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("admins", AdminSchema);
