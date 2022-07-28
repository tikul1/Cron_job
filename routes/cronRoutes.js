const express = require("express");
const router = express.Router();
const cronController = require("../controllers/cronController");

router.get("/list", cronController.list);
router.post("/add", cronController.addData);

module.exports = router;
