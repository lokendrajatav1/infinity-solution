const Blog = require("../models/blogModel");

// Create Blog with Image Upload
exports.createBlog = async (req, res) => {
  try {
    const { title, heading, description, content, author, category } = req.body;
    const iconImage = req.file ? req.file.path : null; // Get image file path

    if (!title || !content || !author || !category || !iconImage) {
      return res.status(400).json({ message: "All fields are required, including icon image" });
    }

    const newBlog = new Blog({ title, heading, description, content, author, category, iconImage });
    await newBlog.save();

    res.status(201).json({ success: true, message: "Blog created", data: newBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all blogs
// @route   GET /api/blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single blog by ID
// @route   GET /api/blogs/:id
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a blog by ID
// @route   PUT /api/blogs/:id
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({ success: true, message: "Blog updated", data: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a blog by ID
// @route   DELETE /api/blogs/:id
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
