const express = require("express");
const router = express.Router();

const {
  // booking details
  addBookingDetails,
  getBookingDetails,
  deleteBookingDetails,
  updateBookingDetails,

} = require("../controllers/bookingDetails.js");

router.route("/bookingdetails").get(getBookingDetails).post(addBookingDetails);
router.route("/bookingdetails/:id").delete(deleteBookingDetails);
router.route("/bookingdetails/:id").put(updateBookingDetails);

module.exports = router;