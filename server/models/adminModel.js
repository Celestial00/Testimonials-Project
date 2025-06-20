const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  Handle: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("admins", AdminSchema);
