const cronUser = require("../models/cronModel");
// const cron = require("node-cron");

//cron setup for scheduled events.

const cronList = async (req, res) => {
  try {
    const user = await cronUser.find();
    res.json({ msg: "Cron working" });
    console.log("hey");
  } catch (e) {
    res.json({ e });
  }
};

module.exports = { cronList };
