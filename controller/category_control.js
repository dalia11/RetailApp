const product = require("../models/category.js");

    exports.findAll = (req, res) => {
        product.getAll((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving product."
            });
          else res.json(data);
        });
      };
