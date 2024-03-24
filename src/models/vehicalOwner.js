const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicalOwner = new Schema({
  balance: String,
});

const VehicalOwner = mongoose.model("VehicalOwner", vehicalOwner);

module.exports = VehicalOwner;
