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

//All theater
exports.allTheaters = async (req, res, next) => {
  try {
    const theaters = await Theater.find();
    res.status(200).json({ theaters });
  } catch (error) {
    next();
  }
};

exports.theaterById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const theater = await Theater.findById(id);
    res.status(200).json({ theater });
  } catch (error) {
    next();
  }
};

exports.bookSeat = async (req, res, next) => {
  try {
    const { id, seatId } = req.params;
    const theater = await Theater.findById(id);

    const seat = theater.seats.find((seat) => seat._id == seatId);

    seat.isBooked = true;

    await theater.save();

    res.status(200).json({ seat });
  } catch (error) {
    next();
  }
};
