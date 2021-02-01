const express = require('express');
const router = express.Router();
const products = require("../controller/user_control.js");

//get all users
router.get('/', products.findAll);

module.exports = router;