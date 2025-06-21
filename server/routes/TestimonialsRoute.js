const express = require("express");
const router = express.Router();
const {
  testimonialsAdd,
  testimonialsApprove,
  testimonialsDelete,
  testimonialsGet,
} = require("../controllers/testimonialsController");

router.get("/get", testimonialsGet);
router.post("/create", testimonialsAdd);
router.post("/delete", testimonialsDelete);
router.post("/UpdateApproval", testimonialsApprove);

module.exports = router;
