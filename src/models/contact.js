const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const Contact = mongoose.model("Contact", contact);

module.exports = Contact;
