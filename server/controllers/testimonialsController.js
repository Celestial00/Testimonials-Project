const testimonialsController = (req, res) => {
  try {
    res.send("hello");
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};

module.exports = testimonialsController;