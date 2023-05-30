const Theater = require("../models/theaterModel");
const { createError } = require("../utils/error");
const { createTheater } = require("../services/theaterService");
const User = require("../models/userModel");

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
    const { ticketItem, id } = req.body;
    const { _id } = req.user;

    const theater = await Theater.findById(id);
    const user = await User.findById(_id);
    // console.log(ticketItem)

    ticketItem.map(async (item) => {
      const seat = theater.seats.find(
        (seat) => seat._id == item.seatDetails._id
      );
      seat.isBooked = true;
    });
    await theater.save();
    await user.noOfOrders++;
    await user.save();

    res.status(200).json({ theater });
  } catch (error) {
    next();
  }
};
