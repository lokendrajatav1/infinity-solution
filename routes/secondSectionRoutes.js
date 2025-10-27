const express = require("express");
const router = express.Router();
const secondSectionController = require("../controller/secondSectionController");
const upload = require("../utils/adminUpload");

// Routes
router.get("/", secondSectionController.getAllSecondSections);
router.get("/:id", secondSectionController.getSecondSectionById);
router.post("/", upload.single("imgSrc"), secondSectionController.createSecondSection);
router.put("/:id", upload.single("imgSrc"), secondSectionController.updateSecondSection);
router.delete("/:id", secondSectionController.deleteSecondSection);

module.exports = router;
