const express = require("express");
const router = express.Router();

router.get("/add", async (req, res) => {
  try {
    console.log("yeah! m in controlles");
  } catch (err) {
    console.log("Error ", err);
  }
});

module.exports = router;
