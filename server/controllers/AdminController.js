const bcryptjs = require("bcryptjs");
const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");


const adminControllers = async (req, res) => {
  const { handle, password } = req.body;
  try {
    const Admin = await adminModel.findOne({ handle: handle.toLowerCase() });

    if (!Admin) {
      return res.status(401).json({ msg: "invalid user name" });
    }

    const checkMatch = await bcryptjs.compare(password, Admin.password);

    if (!checkMatch) {
      return res.status(401).json({ msg: "invalid Password" });
    }

    const token = jwt.sign({ id: Admin._id }, process.env.secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ ok: "success", token: token });
  } catch (error) {
    res.status(500).json({ "intenal Error": error.message });
  }
};

module.exports = adminControllers;
