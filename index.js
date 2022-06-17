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
const cronJob = require("./controllers/cronController");
cron.schedule(" 18 14 * * *", function () {
  console.log("hey");
  cronJob.cronList();
});
app.use("/user", require("./routes/cronRoutes"));

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("port 8090");
});
