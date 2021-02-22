const mongoose = require("mongoose");

const studenSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  Coure: {
    type: String,
    require: true,
  },
  Picture: {
    type: String,
    require: true,
  },
});

// creating the model
const studentModel = mongoose.model("studentModel", studenSchema);

// making the model file generally available
module.exports = studentModel;
