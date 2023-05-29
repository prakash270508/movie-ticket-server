const Theater = require("../models/theaterModel");

//Create Theater
exports.createTheater = async (req, res, next) => {
  const { _id } = req.user;

  const { name, totalSeats, seatsPerRow, image, movieName } = req.body;

  const newTheater = new Theater({
    name,
    seatsPerRow,
    totalSeats,
    image,
    movieName,
  });

  newTheater.ownerId = _id;

  await newTheater.save();

  return newTheater;
};
