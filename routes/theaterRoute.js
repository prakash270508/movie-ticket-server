const express = require("express");

const {
  postTheater,
  allTheaters,
  theaterById,
  bookSeat,
} = require("../controller/theaterController");
const { verifyToken } = require("../utils/authentication");
const uploadMiddleware = require("../utils/upload.js");
const router = express.Router();

router
  .route("/post-theater")
  .post(verifyToken,  postTheater);

router.route("/all-theaters").get(verifyToken, allTheaters);
router.route("/:id").get(verifyToken, theaterById);
router.route("/:id/:seatId").post(verifyToken, bookSeat);

module.exports = router;
