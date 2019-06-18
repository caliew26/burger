// need to import the ORM so we can talk to the db and use those values
//this is the shape, this is the data
const orm = require("../config/orm.js");

var burgerModel = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(response){
            cb(response);
        });
    },
    create: function(columnToUpdate,valsToUp,cb){
        orm.create("burgers", columnToUpdate,valsToUp,function(response){
            cb(response);
        })
    },
    updateOne: function(columnToUpdate,condition,cb){
        orm.updateOne("burgers", columnToUpdate, condition, function(response){
            cb(response);
        })
    }

}

// export for the controller to use (burgers_controller.js)
module.exports = burgerModel;