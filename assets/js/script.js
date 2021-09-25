// Function that will change elements in html
function timeSettings() {
    let currentHour = parseInt(moment().format("H"));

    // Prints current date onto the index.html
    $("#currentDay").text(moment().format("dddd, Do of MMMM YYYY"));

    // Changes the color of the text area based on whether it is past, present or future
    $("textarea").each(function() {
        let currentID = parseInt($(this).attr("id"));
        if (currentID > currentHour) {
            $(this).addClass("future");
        } else if (currentID === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
}

// Function that will insert what is in the text area into local storage
// When the user clicks on the button
function inputPlanner() {
    $("textarea").each(function() {
        let currentHour = parseInt($(this).attr("id"))
        var timeClass = "." + currentHour + "oclock";
        var timeID = "#" + currentHour;
        var timeToString = currentHour.toString();

        $(timeClass).on("click", function(event){
            event.preventDefault();

            var plans = $(timeID).val();
            localStorage.setItem(timeToString, plans);
        })
    });
}

// Function with a for loop that will print from local storage onto page
function outputPlanner() {
    for (let i = 9; i < 18; i++) { 
        var timeID = "#" + i;
        var timeToString = i.toString();
        var storedData = localStorage.getItem(timeToString);
        $(timeID).val(storedData);
    }
}

// Runs the function when the document is ready
$(document).ready(function () {
    timeSettings();
    inputPlanner();
    outputPlanner();
})
