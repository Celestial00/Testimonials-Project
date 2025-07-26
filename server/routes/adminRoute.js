const express = require("express");

const Router = express.Router();
const bcryptjs = require("bcryptjs");
const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");

Router.post("/admin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  try {
    const Admin = await adminModel.findOne({ email: email.toLowerCase() });

    if (!Admin) {
      return res.status(401).json({ res: "401", msg: "Invalid email" });
    }

    const checkMatch = await bcryptjs.compare(password, Admin.password);

    if (!checkMatch) {
      return res.status(401).json({ res: "401", msg: "Invalid password" });
    }

    const token = jwt.sign(
      { id: Admin._id, email: Admin.email },
      process.env.secretKey,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      ok: "success",
      token,
      user: {
        email: Admin.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = Router;
