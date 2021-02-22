require("dotenv").config();

// creating an instance of express
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const studentModel = require("./model/model");
// const router = require("./Controller/Routes/Route")
// const PORT = 2000;

// connecting to MONGODB Atlas
mongoose.connect(process.env.MONGODB_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .once("open", () => {
    console.log("connected to database successfully...");
  })
  .on("error", () => {
    console.log("Database connection failed....");
  });

//creating  an object instance;
const app = express();

// enabling our responds to be returned in json format
app.use(express.json());
// app.use

// making the port to listens
app.listen(process.env.PORT, () => {
  console.log(`listening to ${process.env.PORT}`);
});
