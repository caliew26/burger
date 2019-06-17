//require NPM express package
const express = require("express");
//declare router to be the express.Router
var router = express.Router();
//need to reference the models folder
var burgers = require("../models");

//need (import) routes established to CRU
router.get("/", function(request, response){
    burgers.all(function(result){
        var burgerObj = {
            burger: result
        };
        console.log(burgerObj);
        response.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(request, response){
    burgers.create(["burger_name", "devoured"], [request.body.burger_name, request.body.devoured], function(result){
        response.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function(request,response){
    var condition = "id = " + request.params.id;
    console.log("condition", condition);

    burgers.update(
        {
            burger_name: request.body.burger_name
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