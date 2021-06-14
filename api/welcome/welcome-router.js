const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to node-api2-project API",
    secret: `You now see a ${process.env.SECRET}` || "There is no secret",
  });
});

module.exports = router;
