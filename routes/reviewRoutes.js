// const express = require("express");
// const {
//   addReview,
//   getApprovedReviews,
//   getAllReviews,
//   updateReviewStatus,
// } = require("../controller/reviewController");

// const router = express.Router();

// router.post("/", addReview);
// router.get("/", getApprovedReviews);
// router.get("/admin", getAllReviews);
// router.patch("/:id", updateReviewStatus);

// module.exports = router;



const express = require("express");
const {
  addReview,
  getApprovedReviews,
  getAllReviews,
  updateReviewStatus,
  updateReview,
  deleteReview,
} = require("../controller/reviewController");

const router = express.Router();

// Public routes
router.post("/", addReview); // User submits review
router.get("/", getApprovedReviews); // Show only approved reviews

// Admin routes
router.get("/admin", getAllReviews); // Get all reviews
router.patch("/:id/status", updateReviewStatus); // Update status only
router.patch("/:id", updateReview); // Edit feedback and rating
router.delete("/:id", deleteReview); // Delete review

module.exports = router;
