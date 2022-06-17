const cronUser = require("../models/cronModel");
const cron = require("cron");
const { find } = require("../models/cronModel");

//cron setup for scheduled events.

cron.schedule("* * * * *", (cronSchedule) => {
  console.log("start");
});

const cronList = async (req, res) => {
  try {
    const user = await cronUser.find();
    res.json({ msg: "Cron working" });
  } catch (e) {
    res.json({ e });
  }
};

module.exports = { cronList };
