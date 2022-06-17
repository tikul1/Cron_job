const express = require("express");
const router = express.Router();
const cronController = require("../controllers/cronController");

router.get("/cron", cronController.cronList);

module.exports = router;
