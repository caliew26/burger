//this is where logic will live, will talk to the "view" files
//this is javascript logic

//require NPM express package
const express = require("express");
//declare router to be the express.Router
var router = express.Router();
//need to reference the models folder
var burgersModel = require("../models/burger.js");

//need (import) routes established to CRU
//function is execute
router.get("/", function(request, response){
    burgersModel.selectAll(function(result){
        //burgerCntrlr is handlebar object
        var burgerCntrlr = {
            burgers: result
        };
        console.log("controller console.log " + JSON.stringify(burgerCntrlr));
        response.render("index", burgerCntrlr);
    });
});


router.post("/api/burgers", function(request, response){
    if(!request.body.burger_name){
        response.status(418).send('You must provide a burger name');
    } else if(!["0","1"].includes(request.body.devoured)){
        console.log("user entered invalid value " + request.body.devoured + " for have you tried it ")
        response.status(418).send('You must select yes or no');
    } else {
        burgersModel.create(["burger_name", "devoured"], [request.body.burger_name, request.body.devoured], function (result) {
            //I want the ID back from mysql to populate into the screen
            response.json({id: result.insertID});
            console.log("this is a router.post api/burgers");
            //get a cb(response) from models - burgers.js
        });
    }
});

router.put("/api/burgers/:id", function(request,response){
    var condition = "id = " + request.params.id;
    console.log("condition", condition);

    burgerModel.update(
        {
            devoured: request.body.devoured
        },
        condition, function(result) {
            if(result.changedRows === 0) {
                //problem, 404 status
                return response.status(404).end();
            } else {
            //all is good, 200 status
            response.status(200).end();
        }
    })
})

//export router for server.js
module.exports = router;