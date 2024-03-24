const express = require("express");
const router = express.Router();

const {
  // vehicle Image
  addVehicalImage,
  getVehicalImage,
  deleteVehicalImage,
  updateVehicalImage,
} = require("../controllers/vehicleImage.js");

router.route("/vehicleImage").get(getVehicalImage).post(addVehicalImage);
router.route("/vehicleImage/:id").delete(deleteVehicalImage);
router.route("/vehicleImage/:id").put(updateVehicalImage);

module.exports = router;