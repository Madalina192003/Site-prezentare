const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const order = new Order({
      nume: req.body.nume,
      email: req.body.email,
      telefon: req.body.telefon,
      adresa: req.body.adresa,
      produse: req.body.produse,
    });

    const savedOrder = await order.save();
    res.status(201).json({
      success: true,
      data: savedOrder,
      message: "Comandă plasată cu succes!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
