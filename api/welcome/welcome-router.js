const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "Welcome to node-api2-project API" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
