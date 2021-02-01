const sql = require('../config/database')

let discount = 0;
const order = function (order) {
  this.order_price = order.order_price;
  this.category_id = order.category_id;
  this.user_id = order.user_id;
  this.product_id = order.product_id;
  this.after_discount = order.after_discount;
};
order.create = (newOrder, result) => {

  sql.query("INSERT INTO orders SET ?", newOrder, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created order: ", { id: res.order_id, ...newOrder });
    result(null, { id: res.order_id, ...newOrder });
  });
};


order.getdiscount = (newOrder, result) => {
  sql.query("SELECT category_name FROM category WHERE category_id = " + newOrder.category_id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("category name: ", res[0]);
    //as long as orders not grocery apply discounts
    if (res[0].category_name != 'grocery') {
      sql.query("SELECT role,duration FROM users WHERE UserID = " + newOrder.user_id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log('user role: ', res[0])
        if (res[0].role == 'employee') {
          discount = newOrder.order_price - (newOrder.order_price * 30 / 100);
          result(null, 'Total price after 30% discount: ' + discount);
        }
        else if (res[0].role == 'customer') {
          //customer for over 2 years 
          //(todo)) include month and days
          if ((res[0].duration.getFullYear() - 2) > (new Date().getFullYear() - 2)) {
            discount = newOrder.order_price - (newOrder.order_price * 5 / 100);
            result(null, 'Total price after 5% discount: ' + discount);
          }
        }
        else if (res[0].role == 'affiliate') {
          discount = newOrder.order_price - (newOrder.order_price * 10 / 100);
          result(null, 'Total price after 10% discount: ' + discount);
        }
        else if (newOrder.order_price >= 100) {
          discount = newOrder.order_price - (Math.trunc(newOrder.order_price / 100) * 5);
          result(null, 'Total price after 5% discount on each 100$: ' + discount);
        }
        else
          result(null, 'No discounts available');

      })
    } else {
      result(null, 'No discounts available');
    }
  });
};
module.exports = order;