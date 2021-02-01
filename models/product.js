const sql =  require('../config/database')
const product = function(product) {
    this.price = order.price;
    this.categoy_id = order.category_id;
    this.quantity = order.quantity;
    this.product_id = order.product_id;
    this.product_name = order.product_name;
  };
// product.getAll = result => {
//     sql.query("SELECT * FROM products", (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       console.log("products: ", res);
//       result(null,res)
//     });
//   };

  product.findById = (category_id, result) => {
    sql.query(`SELECT * FROM products WHERE category_id = ${category_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found product: ", res);
        result(null, res);
        return;
      }
  
      // not found product with the id
      result({ kind: "not_found" }, null);
    });
  };
  module.exports = product;