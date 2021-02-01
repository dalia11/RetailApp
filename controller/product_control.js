const product = require("../models/product.js");

    // exports.findAll = (req, res) => {
    //     product.getAll((err, data) => {
    //       if (err)
    //         res.status(500).send({
    //           message:
    //             err.message || "Some error occurred while retrieving products."
    //         });
    //       else res.json(data);
    //     });
    //   };
    exports.find = (req, res) => {
      product.findById(req.params.category_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found product with id ${req.params.category_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving product with id " + req.params.category_id
            });
          }
        } else res.send(data);
      });
    };