const express = require("express");
const router = express.Router();

const {
  // contact
  addContact,
  getContact,
  deleteContact,
  updateContact,
} = require("../controllers/contact.js");

router.route("/contact").get(getContact).post(addContact);
router.route("/contact/:id").delete(deleteContact);
router.route("/contact/:id").put(updateContact);

module.exports = router;