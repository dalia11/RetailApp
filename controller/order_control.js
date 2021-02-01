const order = require("../models/order.js");

exports.postOrder = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a product
  const neworder = new order({
    order_price: req.body.price,
    category_id: req.body.category_id,
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    after_discount: req.body.discount,
  });

  // Save product in the database
  order.create(neworder, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the order."
      });
    else res.json(data);
  });

}
exports.getDiscount = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const neworder = new order({
    order_price: req.body.price,
    category_id: req.body.category_id,
    user_id: req.body.user_id,
    product_id: req.body.product_id,
  });
  order.getdiscount(neworder, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the order."
      });
    else res.json(data);

  });

}