const express = require("express");
const router = express.Router();

const {
  // User
  addNewUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.js");

const {
  // admin
  addAdmin,
  getAdmin,
  deleteAdmin,
  updateAdmin,
} = require("../controllers/admin.js");

const {
  // renter
  addRenter,
  getRenter,
  deleteRenter,
  updateRenter,
} = require("../controllers/renter.js");

const {
  // vehicle owner
  addVehicalOwner,
  getVehicalOwner,
  deleteVehicalOwner,
  updateVehicalOwner,
} = require("../controllers/vehicalOwner.js");

const {
  // vehicle detail
  addVehicalDetails,
  getVehicalDetails,
  deleteVehicalDetails,
  updateVehicalDetails,
} = require("../controllers/vehicalDetails.js");

const {
  // vehicle Image
  addVehicalImage,
  getVehicalImage,
  deleteVehicalImage,
  updateVehicalImage,
} = require("../controllers/vehicleImage.js");

const {
  // booking details
  addBookingDetails,
  getBookingDetails,
  deleteBookingDetails,
  updateBookingDetails,

} = require("../controllers/bookingDetails.js");

const {
  // feedback
  addFeedback,
  getFeedback,
  deleteFeedback,
  updateFeedback,
} = require("../controllers/feedback.js");

const {
  // payment
  addPayment,
  getPayment,
  deletePayment,
  updatePayment,
} = require("../controllers/payment.js");

const {
  // contact
  addContact,
  getContact,
  deleteContact,
  updateContact,
} = require("../controllers/contact.js");

router.route("/").get(getUser).post(addNewUser);
router.route("/:id").delete(deleteUser);
router.route("/:id").put(updateUser);

router.route("/user").get(getAdmin).post(addAdmin);
router.route("/user/:id").delete(deleteAdmin);
router.route("/user/:id").put(updateAdmin);

router.route("/renter").get(getRenter).post(addRenter);
router.route("/renter/:id").delete(deleteRenter);
router.route("/renter/:id").put(updateRenter);

router.route("/owner").get(getVehicalOwner).post(addVehicalOwner);
router.route("/owner/:id").delete(deleteVehicalOwner);
router.route("/owner/:id").put(updateVehicalOwner);

router.route("/details").get(getVehicalDetails).post(addVehicalDetails);
router.route("/details/:id").delete(deleteVehicalDetails);
router.route("/details/:id").put(updateVehicalDetails);

router.route("/vehicleImage").get(getVehicalImage).post(addVehicalImage);
router.route("/vehicleImage/:id").delete(deleteVehicalImage);
router.route("/vehicleImage/:id").put(updateVehicalImage);

router.route("/bookingdetails").get(getBookingDetails).post(addBookingDetails);
router.route("/bookingdetails/:id").delete(deleteBookingDetails);
router.route("/bookingdetails/:id").put(updateBookingDetails);

router.route("/feedback").get(getFeedback).post(addFeedback);
router.route("/feedback/:id").delete(deleteFeedback);
router.route("/feedback/:id").put(updateFeedback);

router.route("/payment").get(getPayment).post(addPayment);
router.route("/payment/:id").delete(deletePayment);
router.route("/payment/:id").put(updatePayment);

router.route("/contact").get(getContact).post(addContact);
router.route("/contact/:id").delete(deleteContact);
router.route("/contact/:id").put(updateContact);

module.exports = router;
