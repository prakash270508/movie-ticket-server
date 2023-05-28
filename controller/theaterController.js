const Theater = require("../models/theaterModel");
const { createError } = require("../utils/error");
const { createTheater } = require("../services/theaterService");

//Post theater
exports.postTheater = async (req, res, next) => {
  try {
    const theater = await createTheater(req, res, next);
    res.status(200).json({ message: "Theater created successfully", theater });
  } catch (error) {
    next();
  }
};
