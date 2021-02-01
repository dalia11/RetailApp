const user = require("../models/user.js");

    exports.findAll = (req, res) => {
        user.getAll((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving user."
            });
          else res.json(data);
        });
      };