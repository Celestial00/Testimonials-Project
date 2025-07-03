const express = require("express");
const router = express.Router();
const {
  testimonialsAdd,
  testimonialsApprove,
  testimonialsDelete,
  testimonialsGet,
  testimonialsReviewAdd
} = require("../controllers/testimonialsController");

router.get("/get", testimonialsGet);
router.post("/create", testimonialsAdd);
router.post("/delete", testimonialsDelete);
router.post("/UpdateApproval", testimonialsApprove);
router.post("/AddReview", testimonialsReviewAdd);

module.exports = router;
