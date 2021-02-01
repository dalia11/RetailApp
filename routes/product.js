const express = require('express');
const router = express.Router();
const products = require("../controller/product_control.js");

//get products within the selected category
router.get('/:category_id', products.find);

module.exports = router;