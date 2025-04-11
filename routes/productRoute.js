const express = require('express');
const { getAllProducts, createProduct, updateProduct, getProductDetails, createProductReview, getAllReviews, deleteReview, deleteProduct } = require('../controller/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const { getUserDetails } = require('../controller/userController');
const uploadImage = require("../utils/uploadImage");

const router = express.Router();
router.route("/products").get( getAllProducts)
router.route("/admin/product/:id").get(getProductDetails)
router.route("/admin/product/:id").put( updateProduct)
router.route("/admin/product/new").post(uploadImage.array('images', 5), createProduct)
router.route("/admin/product/:id").delete( deleteProduct)

router.route("/product/:id").get(getProductDetails)

router.route("/review").put( isAuthenticatedUser, authorizeRoles("admin"), createProductReview)

router.route("/reviews").get( getAllReviews).delete(isAuthenticatedUser ,deleteReview)

module.exports = router;