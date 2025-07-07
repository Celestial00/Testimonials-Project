const express = require("express");
const router = express.Router();
const Dissertation = require("../models/testimonialModel");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    if (!Array.isArray(data) || data.length !== 4) {
      return res
        .status(400)
        .json({ error: "Data must be an array of 4 objects." });
    }

    const [universityDetails, projectDetails, evaluation, feedback] = data;
    const dissertation = new Dissertation({
      universityDetails,
      projectDetails,
      evaluation,
      feedback,
    });

    const saved = await dissertation.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add dissertation." });
  }
});

router.get("/get", async (req, res) => {
  try {
    const AllRes = await Dissertation.find();
    res.status(200).json({ data: AllRes });
  } catch (err) {
    res.status(500).json({ Err: err.message });
  }
});

router.post("/deleted/:id", async (req, res) => {
  try {
    const deleted = await Dissertation.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Dissertation not found." });
    }
    res.json({ message: "Dissertation deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete dissertation." });
  }
});

router.post("/approved/:id", async (req, res) => {
  try {
    const { approved } = req.body;
    if (typeof approved !== "boolean") {
      return res.status(400).json({ error: "approved must be true or false" });
    }

    const updated = await Dissertation.findByIdAndUpdate(
      req.params.id,
      { approved },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Dissertation not found." });
    }

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update approval status." });
  }
});

module.exports = router;
