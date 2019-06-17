const connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput){
        var queryString = "SELECT * FROM ??";
        // console.log(queryString)
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            console.log(result);

        })
    },
    //cannot insert into using ORM, must use ajax ()
    // insertOne: function(tableInput, val1, val2){
    //     var queryString = "INSERT INTO ?? VALUES ?, ?";
    //     console.log(tableInput);
    //     connection.query(queryString,[tableInput, val1, val2], function(err, result){
    //         console.log(val1);
    //         console.log(val2);
    //         console.log(result);
    //         if (err) throw err;
    //         console.log("Insert successful");
    //         return true;
    //     })
    // },
    updateOne: function(tableInput, valup1, upval1){
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString,[tableInput, valup1, upval1], function(err, result){
            if (err) throw err;
            console.log("Update successful");
        })
    }
}


module.exports = orm;