const express = require("express");
const Dept = require("../models/DeptModel");
const Router = express.Router();

Router.get("/Departments", async (req, res) => {
  try {
    const Depts = await Dept.find();

    return res.status(200).json({ Data: Depts });
  } catch (err) {
    res.status(500).json({ Err: err.message });
  }
});

Router.post("/Add", async (req, res) => {
  const { Name } = req.body;

  try {
    const dept = await Dept.findOne({ Name });

    if (dept) {
      return res.status(201).json({ msg: "Already Exist" });
    }

    const nD = Dept({ Name });
    const saved = await nD.save();

    return res.status(200).json({ msg: "saved", saved });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
});

Router.post("/Delete", async (req, res) => {
  const { _id } = req.body;

  try {
    await Dept.findByIdAndDelete(_id);
    return res.status(200).json({ msg: "Delete Success" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
});

module.exports = Router;
