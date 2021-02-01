const sql =  require('../config/database')
const category = function(category) {
    this.categoy_id = order.category_id;
    this.category_name = order.category_name;
  };
category.getAll = result => {
    sql.query("SELECT * FROM category", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("category: ", res);
      result(null,res)
    });
  };
  module.exports = category;