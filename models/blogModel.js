// const mongoose = require("mongoose");

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Please enter the blog title"],
//     },
//     heading: {
//       type: String,
//       required: [true, "Please enter at least one blog heading"],
//     },
//     description: {
//       type: String,
//       required: [true, "Please enter a blog description"],
//     },
//     content: [
//       {
//         heading: {
//           type: String,
//           required: [true, "Please enter the heading"],
//         },
//         description: {
//           type: String,
//           required: [true, "Please enter the description"],
//         },
//         image: {
//           type: String,
//           required: [true, "Please enter the image URL"],
//         },
//       },
//     ],
//     author: {
//       type: String,
//       required: [true, "Please enter the author name"],
//     },
//     iconImage: {
//       type: String, // Store image URL or file path
//       required: [true, "Please upload an icon image"],
//     },
//     category: {
//       type: String,
//       required: [true, "Please select a category"],
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Blog", blogSchema);





const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String, required: true },
  content: [
    {
      heading: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
  author: { type: String, required: true },
  iconImage: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);
