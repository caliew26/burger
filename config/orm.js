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
        });
    },

    create: function(tableInput, columnToUp, valsToUp, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, columnToUp, valsToUp],function(error, result){
            if(error) throw error;
            cb(result);
            //sends cb(result) back to the model?
        })
    },
    //update mysql database and set the value where ?(I think this needs to be ID but not sure how to write that)
    updateOne: function(tableInput, columnToUp, upval1, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = '?'";
        
        connection.query(queryString,[tableInput, columnToUp, upval1], function(err, result){
            console.log(tableInput);
            console.log(columnToUp);
            console.log(upval1);
            if (err) throw err;
            console.log("Update successful");
            cb(result);
        })
    }
}

//export orm.js for model use (burgers.js)
module.exports = orm;