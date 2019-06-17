const orm = require("../config/orm.js");

var burgerModel = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(response){
            cb(response);
        });
    },
    create: function(cb){

    }

}

//export for the controller to use (burgers_controller.js)
module.exports = burgerModel;

//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = cat;