// Assign saveBtn to button variable
var button = $(".saveBtn")

// .ready() Runs everything before user sees it
// Displays current date
$(document).ready(function() {
    var date = moment().format("dddd MMMM Do");
    $("#currentDay").text(date);

    // Time Block Colors: Past = Grey || Present = Red || Future = Green 
    function currentTime() {
        var current = moment().hours()
        var time = $(".time-block");
        time.each(function() {
            var hour = parseInt($(this).attr("id"))
            if (hour === current) {
                $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
            } else if (current > hour) {
                $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
            } else {
                $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
            }
        })
    };
    currentTime()

    //Local Storage for saving scheduled events
    button.on("click", function(event) {
        event.preventDefault();
        var text = $(this).siblings(".col-sm-10").val().replace(/[""]+/g, "");
        var parent = $(this).parent().attr("id");

        localStorage.setItem(parent, JSON.stringify(text));
    });

    // Replacing textareas with 'global' saved for that row
    // (/[""]+/g, "") uses Global Modifier to display everything that was previously saved
    $("#9 textarea").val(localStorage.getItem("9").replace(/[""]+/g, ""));
    $("#10 textarea").val(localStorage.getItem("10").replace(/[""]+/g, ""));
    $("#11 textarea").val(localStorage.getItem("11").replace(/[""]+/g, ""));
    $("#12 textarea").val(localStorage.getItem("12").replace(/[""]+/g, ""));
    $("#13 textarea").val(localStorage.getItem("13").replace(/[""]+/g, ""));
    $("#14 textarea").val(localStorage.getItem("14").replace(/[""]+/g, ""));
    $("#15 textarea").val(localStorage.getItem("15").replace(/[""]+/g, ""));
    $("#16 textarea").val(localStorage.getItem("16").replace(/[""]+/g, ""));
    $("#17 textarea").val(localStorage.getItem("17")).replace(/[""]+/g, "");
});
