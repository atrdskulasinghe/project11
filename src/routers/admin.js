const express = require("express");
const router = express.Router();

const {
  // admin
  addAdmin,
  getAdmin,
  deleteAdmin,
  updateAdmin,
} = require("../controllers/admin.js");

router.route("/user").get(getAdmin).post(addAdmin);
router.route("/user/:id").delete(deleteAdmin);
router.route("/user/:id").put(updateAdmin);

module.exports = router;