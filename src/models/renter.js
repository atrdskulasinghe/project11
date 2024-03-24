const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const renter = new Schema({
  renterId: String,
  licenseNumber: String,
  licenseImage1: String,
  licenseImage2: String,
});

const Renter = mongoose.model("Renter", renter);

module.exports = Renter;
