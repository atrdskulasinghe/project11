const express = require("express");
const router = express.Router();

const {
  // renter
  addRenter,
  getRenter,
  deleteRenter,
  updateRenter,
} = require("../controllers/renter.js");

router.route("/renter").get(getRenter).post(addRenter);
router.route("/renter/:id").delete(deleteRenter);
router.route("/renter/:id").put(updateRenter);

module.exports = router;