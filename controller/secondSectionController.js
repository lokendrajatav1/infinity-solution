const SecondSection = require("../models/secondSectionModel");

// Get all SecondSection items
exports.getAllSecondSections = async (req, res) => {
  try {
    const sections = await SecondSection.find();
    res.status(200).json({ success: true, data: sections });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Get single SecondSection by ID
exports.getSecondSectionById = async (req, res) => {
  try {
    const section = await SecondSection.findById(req.params.id);
    if (!section) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }
    res.status(200).json({ success: true, data: section });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Create a new SecondSection item with image upload
exports.createSecondSection = async (req, res) => {
  try {
    const { title, para } = req.body;
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const newSection = new SecondSection({
      imgSrc: `/uploads/${req.file.filename}`, // Save file path
      title,
      para,
    });

    await newSection.save();
    res.status(201).json({ success: true, data: newSection });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Update a SecondSection item with optional image update
exports.updateSecondSection = async (req, res) => {
  try {
    const { title, para } = req.body;
    let updatedData = { title, para };

    if (req.file) {
      updatedData.imgSrc = `/uploads/${req.file.filename}`;
    }

    const updatedSection = await SecondSection.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedSection) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }

    res.status(200).json({ success: true, data: updatedSection });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Delete a SecondSection item
exports.deleteSecondSection = async (req, res) => {
  try {
    const deletedSection = await SecondSection.findByIdAndDelete(req.params.id);

    if (!deletedSection) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
