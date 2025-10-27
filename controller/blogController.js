const Blog = require("../models/blogModel");

exports.createBlog = async (req, res) => {
  try {
    const { title, heading, description, author, category, content } = req.body;

    const parsedContent = JSON.parse(content); // important
    const iconImageFile = req.files["iconImage"]?.[0];
    const contentImages = req.files["contentImages"] || [];

    if (!iconImageFile) return res.status(400).json({ message: "Icon image required" });

    // Attach images to parsed content
    const updatedContent = parsedContent.map((item, index) => ({
      ...item,
      image: contentImages[index]?.path || "",
    }));

    const newBlog = new Blog({
      title,
      heading,
      description,
      author,
      category,
      iconImage: iconImageFile.path,
      content: updatedContent,
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error("Create blog error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
      error: error.message,
    });
  }
};


exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { title, heading, description, author, category, content } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const iconImageFile = req.files["iconImage"]?.[0];
    const contentImages = req.files["contentImages"] || [];

    const parsedContent = JSON.parse(content);
    const updatedContent = parsedContent.map((item, index) => ({
      ...item,
      image: contentImages[index]?.path || blog.content[index]?.image || "",
    }));

    blog.title = title;
    blog.heading = heading;
    blog.description = description;
    blog.author = author;
    blog.category = category;
    blog.iconImage = iconImageFile?.path || blog.iconImage;
    blog.content = updatedContent;

    await blog.save();
    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog", error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error: error.message });
  }
};
