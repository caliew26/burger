//this is where the js will live - listening for the onclick of the button on the index page

$(function(){
    $(".create-form").click(function(event) {
        //don't want the page to auto-reload
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerY").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log(newBurger + "newBurger created");
            location.reload();
        })
    });
})