const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  nume: { type: String, required: true },
  email: { type: String, required: true },
  telefon: { type: String, required: true },
  adresa: { type: String, required: true },
  produse: { type: Array, required: true },
  dataComanda: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
