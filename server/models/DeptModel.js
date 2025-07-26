const mongoose = require("mongoose");

const deptSchema = new mongoose.Schema({
  Name: {
    type: String, 
    required: true,
  },
});


module.exports = mongoose.model("dept", deptSchema);
