const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedback = new Schema({
  feedbackId: String,
  bookingId: String,
  renterId: String,
  rate: String,
  comment: String,
});

const Feedback = mongoose.model("Feedback", feedback);

module.exports = Feedback;
