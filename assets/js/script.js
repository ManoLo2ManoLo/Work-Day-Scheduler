function timeSettings() {
    let currentHour = parseInt(moment().format("H"));

    $("#currentDay").text(moment().format("dddd, Do of MMMM YYYY"));

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

$(document).ready(function () {
    timeSettings();
})