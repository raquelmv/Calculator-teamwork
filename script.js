//------
$(document).ready(function() {
//---- dynamic buttons---//
    function createButtons() {
        var buttonTexts = [ "1","2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "/", "^", "="];
        var calculatorHolder = $("#calculator-holder");

        for (index in buttonTexts) {
            console.log(index);
            var button = $("<button>");
            button.attr("data-letter", buttonTexts[index]);
            button.text(buttonTexts[index]);
            button.addClass("btn btn-light");
            button.addClass("col-3");
            calculatorHolder.append(button);
        }
    }

    createButtons();
});