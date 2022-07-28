const cronUser = require("../models/cronModel");
const moment = require("moment");
// const cron = require("node-cron");

//cron setup for scheduled events.

const addData = async (req, res) => {
  try {
    let date = new Date(moment.utc(req.query.date, "YYYY-MM-DD").startOf("day"));
    console.log(date);
    const user = await new cronUser({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      dateOfNotification: date,
      age: req.body.age,
    });

    await user.save();

    res.json({ user });
  } catch (e) {
    res.json({ msg: "error" });
  }
};
const list = async (req, res) => {
  let uList = await cronUser.find({});
  res.json({ uList });
};

const cronList = async () => {
  const user = await cronUser.find({
    dateOfNotification: {
      $lt: new Date().toUTCString(),
    },
  });
  console.log("Notification", user);
};
module.exports = { cronList, addData, list };
