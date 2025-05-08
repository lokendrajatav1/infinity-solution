const express = require("express");
const {
  addReview,
  getApprovedReviews,
  getAllReviews,
  updateReviewStatus,
} = require("../controller/reviewController");

const router = express.Router();

router.post("/", addReview);
router.get("/", getApprovedReviews);
router.get("/admin", getAllReviews);
router.patch("/:id", updateReviewStatus);

module.exports = router;
