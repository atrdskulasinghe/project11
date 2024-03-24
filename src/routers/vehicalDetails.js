const express = require("express");
const router = express.Router();

const {
  // vehicle detail
  addVehicalDetails,
  getVehicalDetails,
  deleteVehicalDetails,
  updateVehicalDetails,
} = require("../controllers/vehicalDetails.js");

router.route("/details").get(getVehicalDetails).post(addVehicalDetails);
router.route("/details/:id").delete(deleteVehicalDetails);
router.route("/details/:id").put(updateVehicalDetails);

module.exports = router;