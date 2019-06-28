// need to import the ORM so we can talk to the db and use those values
//this is the shape, this is the data
const orm = require("../config/orm.js");

var burgerModel = {
    selectAll: function(cb) {
        orm.selectAll("burgers", cb);
    },
    //is is is sent to the controller router.post
    create: function(columnToUpdate,valsToUp,cb){
        //orm.create goes to the orm.js page
        orm.create("burgers", columnToUpdate,valsToUp,cb)
    },
    updateOne: function(columnToUpdate,condition,cb){
        orm.updateOne("burgers", columnToUpdate, condition, cb)
    }

}

// export for the controller to use (burgers_controller.js)
module.exports = burgerModel;