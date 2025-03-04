const mongoose = require("mongoose");

const joinSchema = new mongoose.Schema({
  nume: { type: String, required: true },
  email: { type: String, required: true },
  telefon: { type: String, required: true },
  motivatie: { type: String, required: true },
  dataInscriere: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Join", joinSchema);
