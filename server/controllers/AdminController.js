const adminControllers = (req, res) => {
  try {
    res.send("sup admin");
  } catch (error) {
    res.status(500).json({ "intenal Error": error });
  }
};

module.exports = adminControllers;
