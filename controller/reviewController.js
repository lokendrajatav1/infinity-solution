const Review = require("../models/Review");

// Add review
exports.addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review submitted", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get approved reviews only
exports.getApprovedReviews = async (req, res) => {
  const reviews = await Review.find({ status: "approved" });
  res.json(reviews);
};

// Admin: get all reviews
exports.getAllReviews = async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
};

// Admin: update status
exports.updateReviewStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Review.findByIdAndUpdate(id, { status });
  res.json({ message: "Status updated" });
};
