const mongoose = require("mongoose");

const Conn = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log(`databse Connected`);
  } catch (error) {
    console.log(`internal Datbase Error ${error}`);
  }
};

module.exports = Conn;
