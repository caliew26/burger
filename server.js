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
//middleware - the public folder
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//set up express-handlebar engine
app.engine("handlebars", expressHandlbars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


orm.selectAll("burgers");

orm.updateOne("burgers", "burger_name", false, "Cali-Safe");

app.post("/api/burgers", function(request,response){
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES(?, ?)",[req.body.burger_name, req.body.devoured],function(err, response){
        if (err) {
        return response.status(500).end();
    }
    response.json({id: response.insertID});
    });
});