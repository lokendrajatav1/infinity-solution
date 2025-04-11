const mongoose = require("mongoose");

const SecondSectionSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  para: { type: String, required: true },
}, { timestamps: true });

const SecondSection = mongoose.model("SecondSection", SecondSectionSchema);
module.exports = SecondSection;
