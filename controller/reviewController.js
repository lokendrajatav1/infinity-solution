// const Review = require("../models/Review");

// // Add review
// exports.addReview = async (req, res) => {
//   try {
//     const review = new Review(req.body);
//     await review.save();
//     res.status(201).json({ message: "Review submitted", review });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get approved reviews only
// exports.getApprovedReviews = async (req, res) => {
//   const reviews = await Review.find({ status: "approved" });
//   res.json(reviews);
// };

// // Admin: get all reviews
// exports.getAllReviews = async (req, res) => {
//   const reviews = await Review.find();
//   res.json(reviews);
// };

// // Admin: update status
// exports.updateReviewStatus = async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;
//   await Review.findByIdAndUpdate(id, { status });
//   res.json({ message: "Status updated" });
// };


const Review = require("../models/Review");

// Add review (user-side)
exports.addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review submitted", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get only approved reviews (user-side)
exports.getApprovedReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ status: "approved" });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Update status (approve/reject)
exports.updateReviewStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await Review.findByIdAndUpdate(id, { status });
    res.json({ message: "Status updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Edit feedback and rating
exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { feedback, rating } = req.body;
  try {
    await Review.findByIdAndUpdate(id, { feedback, rating });
    res.json({ message: "Review updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Delete review
exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    await Review.findByIdAndDelete(id);
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
