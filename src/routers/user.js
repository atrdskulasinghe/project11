const express = require("express");
const router = express.Router();

const {
  // User
  addNewUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.js");

router.route("/").get(getUser).post(addNewUser);
router.route("/:id").delete(deleteUser);
router.route("/:id").put(updateUser);

module.exports = router;