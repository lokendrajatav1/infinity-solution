const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure 'uploads/images' and 'uploads/videos' directories exist
const ensureUploadsFolder = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
};
ensureUploadsFolder('uploads/images');
ensureUploadsFolder('uploads/videos');

// Storage configuration based on file type
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, 'uploads/images/');
        } else if (file.mimetype.startsWith("video/")) {
            cb(null, 'uploads/videos/');
        } else {
            cb(new Error('Invalid file type'), null);
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Allowed MIME types for validation
const allowedImageTypes = /jpeg|jpg|png/;
const allowedVideoTypes = /mp4|quicktime|x-msvideo|x-matroska/;

const fileFilter = (req, file, cb) => {
    const extname = path.extname(file.originalname).toLowerCase();
    const mimetype = file.mimetype;

    if (file.mimetype.startsWith("image/") && allowedImageTypes.test(extname)) {
        return cb(null, true);
    } 
    if (file.mimetype.startsWith("video/") && allowedVideoTypes.test(extname)) {
        return cb(null, true);
    }
    return cb(new Error('Only .png, .jpg, .jpeg, .mp4, .mov, .avi, and .mkv files are allowed'));
};

// Initialize multer with limits (5MB for images, 100MB for videos)
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 100 * 1024 * 1024, // 100MB max (applies to videos)
    }
});

module.exports = upload;



// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // Create folder if it doesn't exist
// const ensureUploadsFolder = (folderPath) => {
//   if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
//   }
// };
// ensureUploadsFolder("uploads/images");
// ensureUploadsFolder("uploads/videos");

// // Define storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if (file.mimetype.startsWith("image/")) {
//       cb(null, "uploads/images");
//     } else if (file.mimetype.startsWith("video/")) {
//       cb(null, "uploads/videos");
//     } else {
//       cb(new Error("Invalid file type"), null);
//     }
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
//     cb(null, uniqueSuffix);
//   },
// });

// // Allowed extensions
// const allowedImageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
// const allowedVideoExtensions = [".mp4", ".mov", ".avi", ".mkv"];

// // File filter
// const fileFilter = (req, file, cb) => {
//   const ext = path.extname(file.originalname).toLowerCase();

//   if (file.mimetype.startsWith("image/") && allowedImageExtensions.includes(ext)) {
//     return cb(null, true);
//   }

//   if (file.mimetype.startsWith("video/") && allowedVideoExtensions.includes(ext)) {
//     return cb(null, true);
//   }

//   cb(new Error("Only images (.jpg, .jpeg, .png, .webp) and videos (.mp4, .mov, .avi, .mkv) are allowed"), false);
// };

// // Limits
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: {
//     fileSize: 100 * 1024 * 1024, // 100MB
//   },
// });

// module.exports = upload;
