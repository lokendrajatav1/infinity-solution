const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");
const upload = require("../utils/upload");

router.post("/blogs", upload.single("iconImage"),  blogController.createBlog); 
router.get("/blogs", blogController.getAllBlogs);
router.get("/blogs/:id", blogController.getBlogById);
router.put("/blogs/:id", blogController.updateBlog);
router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;
