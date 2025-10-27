const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");
const upload = require("../utils/blogupload");

router.post(
  "/blogs",
  upload.fields([
    { name: "iconImage", maxCount: 1 },
    { name: "contentImages", maxCount: 10 },
  ]),
  blogController.createBlog
);

router.get("/blogs", blogController.getAllBlogs);
router.get("/blogs/:id", blogController.getBlogById);

router.put(
  "/blogs/:id",
  upload.fields([
    { name: "iconImage", maxCount: 1 },
    { name: "contentImages", maxCount: 10 },
  ]),
  blogController.updateBlog
);

router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;
