//this is where the js will live - listening for the onclick of the button on the index page

$(function(){
    $(".create-form").click(function(event) {
        event.preventDefault();

        var burgerJS = {
            burgerName: $("#burgerY").val().trim(),
            devoured: $("[name=devour]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerJS
        }).then(function(){
            console.log(burgerJS + "javascript page");
            location.reload();
        })
    });
})