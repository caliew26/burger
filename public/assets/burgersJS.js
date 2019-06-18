//this is where the js will live - listening for the onclick of the button on the index page

$(function(){
    $(".newBurgerBtn").on("click", function(event) {
        console.log("This is the onclick");
        //don't want the page to auto-reload
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerY").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        }
            console.log(newBurger.burger_name);
            console.log(newBurger.devoured);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log(newBurger + "newBurger created");
            location.reload();
        })
    });
})