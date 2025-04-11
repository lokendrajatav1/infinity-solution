const express = require("express");
const router = express.Router();
const { createCategory, getCategories, updateCategory, getCategory, deleteCategory } = require("../controller/categoryController");
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

// Create a new category (Admin only)
router.post("/admin/categories", isAuthenticatedUser, authorizeRoles("admin"), createCategory);
router.put("/admin/categories/:id", updateCategory);
router.delete("/admin/categories/:id", deleteCategory);

// Get all categories
router.get("/admin/categories", getCategories);
router.get("/admin/categories/:id", getCategory);

module.exports = router;
