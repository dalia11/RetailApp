const express = require('express');
const router = express.Router();
const orders = require("../controller/order_control.js");

// apply discount and place order in database
router.post('/', orders.postOrder);
//get discount after placing order
router.post('/discount', orders.getDiscount);

module.exports = router;