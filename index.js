const express = require("express");
const PORT = process.env.PORT || 1337;
const bodyParser = require("body-parser");
const db = require("./config/db");
const cors = require("cors");
const app = express();
const studentRoute = require("./routes/studentRoute");

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/api/student", studentRoute);
app.listen(PORT, () => console.log("server started at", PORT));

// db.sync()

db.authenticate()
  .then(() => console.log("Conncted to DB"))
  .catch(() => console.log("Error in connecting DB"));
