const mongoose = require("mongoose");

const TheaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ownerId: String,
  totalSeats: {
    type: Number,
    required: true,
  },
  seatsPerRow: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  movieName: {
    type: String,
  },
  seats: [
    {
      seatNumber: {
        type: String,
        required: true,
      },
      isBooked: {
        type: Boolean,
        default: false,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

TheaterSchema.pre("save", function (next) {
  const theater = this;

  // Check if seats have already been added
  if (theater.seats.length === 0) {
    const { totalSeats } = theater;
    for (let i = 1; i <= totalSeats; i++) {
      const randomNumber = Math.floor(Math.random() * 150) + 100;
      theater.seats.push({ seatNumber: i, price: randomNumber });
    }
  }

  next();
});

module.exports = mongoose.model("Theater", TheaterSchema);
