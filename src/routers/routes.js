const express = require("express");
const router = express.Router();

const adminRouter = require("./admin.js");
const bookingDetailsRouter = require("./bookingDetails.js");
const contactRouter = require("./contact.js");
const feedbackRouter = require("./feedback.js");
const paymentRouter = require("./payment.js");
const renterRouter = require("./renter.js");
const userRouter = require("./user.js");
const vehicalDetailsRouter = require("./vehicalDetails.js");
const vehicalOwnerRouter = require("./vehicalOwner.js");
const vehicleImageRouter = require("./vehicleImage.js");

router.use("/", adminRouter);
router.use("/", bookingDetailsRouter);
router.use("/", contactRouter);
router.use("/", feedbackRouter);
router.use("/", paymentRouter);
router.use("/", renterRouter);
router.use("/", userRouter);
router.use("/", vehicalDetailsRouter);
router.use("/", vehicalOwnerRouter);
router.use("/", vehicleImageRouter);

module.exports = router;
