const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./src/routers/routes.js"); // Assuming router.js is the file aggregating all routes

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/GroupProject");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Using the router
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
