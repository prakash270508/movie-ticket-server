const Theater = require("../models/theaterModel");

//Create Theater
exports.createTheater = async (req, res, next) => {
  const { name, totalSeats, seatsPerRow, image } = req.body;

  const newTheater = new Theater({
    name,
    seatsPerRow,
    totalSeats,
    image,
  });

  await newTheater.save();

  return newTheater

};
