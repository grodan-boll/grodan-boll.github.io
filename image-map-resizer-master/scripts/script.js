$(document).ready(function () {
    $("#svartText").click(function () {
        $("p").toggleClass("svartaTexten") //togglar klassen "svartaTexten" på alla p när man trycker på knappen "Svart Text"
    })
    $("#svartText").click(function () {
        $("h2").toggleClass("svartaTexten") //togglar klassen "svartaTexten" på alla h2 när man trycker på knappen "Svart Text"
    })


    $("#vitBakgrund").click(function () {
        $("p").toggleClass("vitaBakgrunden") //togglar klassen "vitaBakgrunden" på alla p när man trycker på knappen "Vit textbakgrund"
    })
    $("#vitBakgrund").click(function () {
        $("h2").toggleClass("vitaBakgrunden") //togglar klassen "vitaBakgrunden" på alla h2 när man trycker på knappen "Vit textbakgrund"
    })

})