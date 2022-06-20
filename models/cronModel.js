const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },

  email: {
    type: String,
    // required: true,
    // unique: true,
    // lowercase: true,
  },
  age: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
