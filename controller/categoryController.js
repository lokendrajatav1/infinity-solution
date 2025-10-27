const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Category = require("../models/categoryModel");

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const categoryExists = await Category.findOne({ name });

    if (categoryExists) {
      return res.status(400).json({ success: false, message: "Category already exists" });
    }

    const category = await Category.create({ name, description });

    res.status(201).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
  
      if (!name || !description) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }
  
      const category = await Category.findById(id);
  
      if (!category) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
  
      category.name = name;
      category.description = description;
  
      await category.save();
  
      res.status(200).json({ success: true, message: "Category updated successfully", category });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Get Single Category
exports.getCategory = async (req, res) => {
    try {
      const { id } = req.params;
  
      const category = await Category.findById(id);
  
      if (!category) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
  
      res.status(200).json({ success: true, category });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  

exports.deleteCategory = catchAsyncErrors(async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    res.status(200).json({ success: true, message: "Category deleted successfully" });
  })