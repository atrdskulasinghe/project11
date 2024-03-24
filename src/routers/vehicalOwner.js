const express = require("express");
const router = express.Router();

const {
  // vehicle owner
  addVehicalOwner,
  getVehicalOwner,
  deleteVehicalOwner,
  updateVehicalOwner,
} = require("../controllers/vehicalOwner.js");

router.route("/owner").get(getVehicalOwner).post(addVehicalOwner);
router.route("/owner/:id").delete(deleteVehicalOwner);
router.route("/owner/:id").put(updateVehicalOwner);

module.exports = router;