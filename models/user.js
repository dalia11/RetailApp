const sql =  require('../config/database')
const user = function(user) {
    this.FullName = order.price;
    this.Country = order.quantity;
    this.Email = order.product_name;
    this.Username = order.product_name;
  };
user.getAll = result => {
    sql.query("SELECT * FROM users", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null,res)
    });
  };

  module.exports = user;