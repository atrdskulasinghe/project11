const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const vehicalDetails = new Schema({
  vehicleDetailsId: String,
  vehicleOwnerId: String,
  vehicleNumber: String,
  VehicleType: String,
  vehicleModel: String,
  make: String,
  year: String,
  color: String,
  transmissionType: String,
  fuelType: String,
  seatingCapacity: String,
  dalyRentalRate: String,
  weeklyRentalRate: String,
  monthlyRentalRate: String,
  availability: String,
  location: String,
});

const VehicalDetails = mongoose.model("VehicalDetails", vehicalDetails);

module.exports = VehicalDetails;
