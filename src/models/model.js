const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /@gmail\.com$/.test(value);
      },
      message:
        "Invalid email format. Please use an email address ending with @gmail.com",
    },
  },
  dob: {
    type: Date,
    validate: {
      validator: function (v) {
        // Check if v is a valid Date object
        return !isNaN(new Date(v));
      },
      message: (props) => `${props.value} is not a valid date!`,
    },
  },
  accountType: String,
  phoneNumber: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer",
    },
  },
  houseNumber: String,
  state: String,
  city: String,
  latitude: String,
  longitude: String,
  activationCode: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer",
    },
  },
  status: String,
  password: String,
  ProfileImagePath: String,
});

const adminSchema = new Schema({
  adminId: String,
  userId: String,
});

const renter = new Schema({
  renterId: String,
  licenseNumber: String,
  licenseImage1: String,
  licenseImage2: String,
});

const vehicalOwner = new Schema({
  vehicalOwnerId: String,
  balance: String,
});

const vehicalDetails = new Schema({
  vehicleDetailsId: String,
  vehicleOwnerId: String,
  vehicleNumber: String,
  VehicleType: String,
  vehicleModel: String,
  make: String,
  year: String,
  color: String,
  transmissionType: String,
  fuelType: String,
  seatingCapacity: String,
  dalyRentalRate: String,
  weeklyRentalRate: String,
  monthlyRentalRate: String,
  availability: String,
  location: String,
});

const vehicleImage = new Schema({
  vehicleImageId: String,
  vehicleDetailsId: String,
  imagePath: String,
});

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

const feedback = new Schema({
  feedbackId: String,
  bookingId: String,
  renterId: String,
  rate: String,
  comment: String,
});

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

const contact = new Schema({
  contactId: String,
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /@gmail\.com$/.test(value);
      },
      message:
        "Invalid email format. Please use an email address ending with @gmail.com",
    },
  },
  subject: String,
  message: String,
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Renter = mongoose.model("Renter", renter);
const VehicalOwner = mongoose.model("VehicalOwner", vehicalOwner);
const VehicalDetails = mongoose.model("VehicalDetails", vehicalDetails);
const VehicleImage = mongoose.model("VehicleImage", vehicleImage);
const BookingDetails = mongoose.model("BookingDetails", bookingDetails);
const Feedback = mongoose.model("Feedback", feedback);
const Payment = mongoose.model("Payment", payment);
const Contact = mongoose.model("Contact", contact);

// export to the Controller Page
module.exports = {
  User,
  Admin,
  Renter,
  VehicalOwner,
  VehicalDetails,
  VehicleImage,
  BookingDetails,
  Feedback,
  Payment,
  Contact,
};
