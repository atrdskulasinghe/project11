const express = require("express");
const router = express.Router();

const {
  // feedback
  addFeedback,
  getFeedback,
  deleteFeedback,
  updateFeedback,
} = require("../controllers/feedback.js");

router.route("/feedback").get(getFeedback).post(addFeedback);
router.route("/feedback/:id").delete(deleteFeedback);
router.route("/feedback/:id").put(updateFeedback);

module.exports = router;