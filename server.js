const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/atomy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schemas
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
});

const joinSchema = new mongoose.Schema({
  joinName: String,
  joinEmail: String,
  joinPhone: String,
});

const Order = mongoose.model("Order", orderSchema);
const Join = mongoose.model("Join", joinSchema);

// Routes
app.post("/api/order", (req, res) => {
  const newOrder = new Order(req.body);
  newOrder.save((err) => {
    if (err) {
      res.status(500).send("Error saving order");
    } else {
      res.status(200).send("Order saved successfully");
    }
  });
});

app.post("/api/join", (req, res) => {
  const newJoin = new Join(req.body);
  newJoin.save((err) => {
    if (err) {
      res.status(500).send("Error saving join");
    } else {
      res.status(200).send("Join saved successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
