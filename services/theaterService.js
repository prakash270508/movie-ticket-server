const Theater = require("../models/theaterModel");

//Create Theater
exports.createTheater = async (req, res, next) => {
  const { name, totalSeats, seatsPerRow, image , movieName} = req.body;

  const newTheater = new Theater({
    name,
    seatsPerRow,
    totalSeats,
    image,
    movieName
  });

  await newTheater.save();

  return newTheater

};
