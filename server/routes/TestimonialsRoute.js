const express = require("express");
const router = express.Router();
const testmonialsContoller = require("../controllers/testimonialsController");

router.get("/", testmonialsContoller);

module.exports = router;
