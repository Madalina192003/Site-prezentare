const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  nume: { type: String, required: true },
  email: { type: String, required: true },
  mesaj: { type: String, required: true },
  dataContact: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
