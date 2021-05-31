//Call routes api

//To run this server, please run nodemon into the api folder

const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Welcome, by default you're listen to port 3000",
    version: "1.0.0",
  });
});

module.exports = router;
