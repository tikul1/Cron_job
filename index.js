const express = require("express");
const mongoose = require("./db/db");
const cron = require("cron");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/user", require("./routes/cronRoutes"));

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("port 8090");
});