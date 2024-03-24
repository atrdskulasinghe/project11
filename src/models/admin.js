const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  adminId: String,
  userId: String,
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
