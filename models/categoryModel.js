const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the category name"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter a category description"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
