const cronUser = require("../models/cronModel");
// const cron = require("node-cron");

//cron setup for scheduled events.

const addData = async (req, res) => {
  try {
    const user = await new cronUser({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      age: req.body.age,
    });
    res.json({ user });
  } catch (e) {
    res.json({ msg: "error" });
  }
};

const cronList = async (req, res) => {
  try {
    const user = await cronUser.find();
    console.log(user);
    console.log("hello");
    res.json({ user });
  } catch (e) {}
};

module.exports = { cronList, addData };
