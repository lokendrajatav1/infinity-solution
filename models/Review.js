// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   feedback: String,
//   image: String,
//   status: { type: String, default: "pending" },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Review", reviewSchema);


const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    feedback: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
