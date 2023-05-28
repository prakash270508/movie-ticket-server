const multer = require("multer");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Create the Multer upload middleware
const uploadMiddleware = multer({ storage: storage });

module.exports = uploadMiddleware;
