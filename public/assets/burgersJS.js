//this is where the js will live - listening for the onclick of the button on the index page
$(document).ready(function(){
    $("#create-form").submit(function (event) {
        console.log("This is the onclick");
        //don't want the page to auto-reload
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerY").val().trim(),
            devoured: $("[name=devoured]:checked").val()
        }
        console.log("newBurger " + newBurger)
        console.log("newBurger button" + newBurger.burger_name);
        console.log(newBurger.devoured);
        $.ajax({
            type: "POST",
            url: "/api/burgers",
            data: newBurger
        }).then(function () {
            console.log("newBurger created");
            location.reload();
        })
    });
})
