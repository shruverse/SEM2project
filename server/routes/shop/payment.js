const express = require("express");
const { createPayment } = require("../../controllers/shop/payment");

const router = express.Router();

router.post("/create", createPayment);

module.exports = router;
