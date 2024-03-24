const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payment = new Schema({
  paymentId: String,
  vehicleOwnerId: String,
  date: {
    type: Date,
    validate: {
      validator: function (v) {
        // Check if v is a valid Date object
        return !isNaN(new Date(v));
      },
      message: (props) => `${props.value} is not a valid date!`,
    },
  },
  time: String,
  amount: String,
  status: String,
});

const Payment = mongoose.model("Payment", payment);

module.exports = Payment;
