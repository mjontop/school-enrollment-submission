const express = require("express");
const router = express.Router();
const Student = require("../models/StudentModel");

router.post("/add", async (req, res) => {
  try {
    const new_student = await Student.create(req.body);
    return res.send({
      new_student,
      success: true,
    });
  } catch (err) {
    console.log("Error..... ", err);
    return res.send({
      error: err,
      success: false,
    });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    const updated_student = await Student.update(req.body, {
      where: { admission_no: req.params.id },
    });
    return res.send({
      updated_student: { ...req.body, admission_no: req.params.id },
      success: true,
    });
  } catch (err) {
    console.log("Error..... ", err);
    return res.send({
      error: err,
      success: false,
    });
  }
});

module.exports = router;
