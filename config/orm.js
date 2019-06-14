const connectMySQL = require("./connection.js");

var orm = {
    selectAll: function(tableInput, columnToSearch){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput, columnToSearch], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(tableInput, columnToSearch, valOfColumn, valueOfColumn){
        var queryString = "INSERT INTO * FROM ?? "
    }
}


module.exports = orm;