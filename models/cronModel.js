const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  dateOfNotification: {
    type: Date,
    default: new Date().toISOString(),
  },

  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
