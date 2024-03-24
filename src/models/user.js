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

const User = mongoose.model("User", userSchema);

module.exports = User;
  