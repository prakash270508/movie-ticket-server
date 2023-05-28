const express = require("express");

const { postTheater, allTheaters } = require("../controller/theaterController");
const { verifyToken } = require("../utils/authentication");
const uploadMiddleware = require("../utils/upload.js");
const router = express.Router();

router
  .route("/post-theater")
  .post(uploadMiddleware.single("image"), postTheater);

router.route("/all-theaters").get(verifyToken, allTheaters);

module.exports = router;
