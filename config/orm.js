//require the connection to mysql
const connection = require("../config/connection.js");

//declare variable that is going to select "all" from mysql and return it
var orm = {
    selectAll: function(tableInput,cb){
        var queryString = "SELECT * FROM ??";
        // console.log(queryString)
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },
    //update mysql database and set the value where ?(I think this needs to be ID but not sure how to write that)
    updateOne: function(tableInput, valup1, upval1, cb){
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString,[tableInput, valup1, upval1], function(err, result){
            if (err) throw err;
            console.log("Update successful");
            cb(result);
        })
    }
}

//export orm.js for model use (burgers.js)
module.exports = orm;