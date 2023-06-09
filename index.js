const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute.js");
const authRoute = require("./routes/auth.js");
const theaterRoute = require("./routes/theaterRoute.js");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./utils/db.js");
const bodyParser = require("body-parser");
const path = require("path");
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors());

//Routes
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/theater", theaterRoute);

//
app.get("/", (req, res) => {
  res.send("Woking fine");
});

//Error handlling
app.use((error, req, res, next) => {
  const errorMessage = error.message || "Something went wrong";
  const errorStatus = error.status || 500;

  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`.gray.bold);
});
