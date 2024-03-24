const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingDetails = new Schema({
    bookingId: String,
    renterId: String,
    vehicleDetails: String,
    bookDate: {
        type: Date,
        validate: {
            validator: function (v) {
                // Check if v is a valid Date object
                return !isNaN(new Date(v));
            },
            message: (props) => `${props.value} is not a valid date!`,
        },
    },
    bookTime: String,
    pickupDate: {
        type: Date,
        validate: {
            validator: function (v) {
                // Check if v is a valid Date object
                return !isNaN(new Date(v));
            },
            message: (props) => `${props.value} is not a valid date!`,
        },
    },
    pickupTime: String,
    returnDate: {
        type: Date,
        validate: {
            validator: function (v) {
                // Check if v is a valid Date object
                return !isNaN(new Date(v));
            },
            message: (props) => `${props.value} is not a valid date!`,
        },
    },
    returnTime: String,
    totalDays: Number,
    totalCost: String,
    bookingStatus: String,
    pickupLatitude: String,
    pickupLongitude: String,
    returnLatitude: String,
    returnLongitude: String,
    liveLatitude: String,
    liveLongitude: String,
    advancePayment: String,
    advancePaymentStatus: String,
    paymentMethod: String,
    paymentStatus: String,
    note: String,
});

const BookingDetails = mongoose.model("BookingDetails", bookingDetails);

module.exports = BookingDetails;
  