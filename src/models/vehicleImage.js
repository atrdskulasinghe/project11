const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleImage = new Schema({
  vehicleImageId: String,
  vehicleDetailsId: String,
  imagePath: String,
});

const VehicleImage = mongoose.model("VehicleImage", vehicleImage);

module.exports =  VehicleImage;
