const express = require("express");
const router = express.Router();

const {
  // payment
  addPayment,
  getPayment,
  deletePayment,
  updatePayment,
} = require("../controllers/payment.js");

router.route("/payment").get(getPayment).post(addPayment);
router.route("/payment/:id").delete(deletePayment);
router.route("/payment/:id").put(updatePayment);

module.exports = router;