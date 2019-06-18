//require npm packge mysql
var mysql = require("mysql");

//define msql connection values
var connection;
if (process.env.JAWSDB_URL) {
      connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
      connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Potter!!13",
        database: "burgers_db"
      })
}


//establish connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

//export connection for orm.js
module.exports = connection;
