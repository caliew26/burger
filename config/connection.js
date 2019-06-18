//require npm packge mysql
var mysql = require("mysql");

//define msql connection values
var connection;
if ((process.env.PORT || 3306) !=3306) {
      connection = mysql.createConnection({
          host: "jlg7sfncbhyvga14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
          port: 3306,
          user: "n9ct6pjqxgzwea7d",
          password: "n9ct6pjqxgzwea7d",
          database: "wqnbw4oazpnu7388"
      });
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
