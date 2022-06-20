const cronUser = require("../models/cronModel");
// const cron = require("node-cron");

//cron setup for scheduled events.

const cronList = async (req, res) => {
  try {
    const user = await cronUser.find();
    console.log(user);
    console.log("hello");
  } catch (e) {}
};

module.exports = { cronList };
