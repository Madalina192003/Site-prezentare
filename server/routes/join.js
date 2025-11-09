const express = require("express");
const router = express.Router();
const joinController = require("../controllers/joinController");

router.post("/", joinController.createJoin);
router.get("/", joinController.getAllJoins);

module.exports = router;
