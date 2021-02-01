const express = require('express');
const router = express.Router();
const category = require("../controller/category_control.js");

//get all categories available
router.get('/', category.findAll);

module.exports = router;