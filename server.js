//require npm package express
const express = require("express");
//require npm package express-handlebars
const expressHandlbars = require("express-handlebars");
//declaring app to be express
const app = express();
//declaring the port access for heroku and localhost
var PORT = process.env.PORT || 8080;
//connect to the orm.js in the config file
const orm = require("./config/orm.js");
//import the burgers_controller.js in the controller file
const router = require("./controller/burgers_controller.js")
//middleware - the public folder
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//set up express-handlebar engine
app.engine("handlebars", expressHandlbars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//need to import the routes which live in the controller folder - they will want to access the server
const routes = require("./controller/burgers_controller.js");
app.use(routes);

//need to set the app up to listen to the port
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
  