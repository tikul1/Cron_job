const express = require("express");
const mongoose = require("./db/db");
const cron = require("node-cron");
const moment = require("moment");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/cron", async (req, res) => {
  let date = req.query.date; //format 2022-07-27  time: 12:44
  let hour = req.query.hour;
  let minute = req.query.minute;
  let day = date.slice(8, 10);
  let month = date.slice(5, 7);

  if (!!date && !!hour && !!minute) {
    let task = cron.schedule(`${minute} ${hour}  ${day} ${month} * `, () => {
      console.log("CRON stareted.!!");
      res.send("Success!!!!");
    });
  } else {
    res.send("Error");
  }
});

// app.get("/cron2", async (req, res) => {
//   let date = req.query.date;
//   const job = cron.schedule(date, function () {

//     console.log("hey.");
//   });
//   // job.start();
// });
app.use("/user", require("./routes/cronRoutes"));

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("port 8090");
});
