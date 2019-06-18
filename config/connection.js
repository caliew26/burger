//require npm packge mysql
var mysql = require("mysql");

//define msql connection values
var con = {}
  if ((process.env.PORT || 3000) != 3000) {
      con = {
        host: "gmgcjwawatv599gq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "yqr1358ag59b86t2",
        password: "",
        database: "mfprp122v8lffehd"
      }
  } else {
      con = {
          host: "localhost",
          port: 3306,
          user: "root",
          password: "",
          database: "burgers_db"
      }
}
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Potter!!13",
//   database: "burgers_db"
// });

//establish connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

//export connection for orm.js
module.exports = connection;
