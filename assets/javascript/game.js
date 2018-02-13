// Global Variables
var jewel1 = 0;
var jewel2 = 0;
var jewel3 = 0;
var jewel4 = 0;
var targetPointsRange = [19, 120];
var jewelPointsRange = [1, 12];
var targetPoints = 0;
var yourPoints = 0;
var wins = 0;
var losses = 0;

// Functions

// Randomizes the target score
function goalPoints() {
    var low = targetPointsRange[0];
    var high = targetPointsRange[1];
    var range = high - low;
    targetPoints = Math.floor(Math.random() * range) + low;
}

// Randomizes the points on each jewel
function jewelPoints() {
    var low = jewelPointsRange[0];
    var high = jewelPointsRange[1];
    var range = high - low;
    jewel1 = Math.floor(Math.random() * range) + low;
    jewel2 = Math.floor(Math.random() * range) + low;
    jewel3 = Math.floor(Math.random() * range) + low;
    jewel4 = Math.floor(Math.random() * range) + low;
    $("#jewel-button1").attr("jewelValue", jewel1);
    $("#jewel-button2").attr("jewelValue", jewel2);
    $("#jewel-button3").attr("jewelValue", jewel3);
    $("#jewel-button4").attr("jewelValue", jewel4);
}

// Resets the scores for a new game.
function resetGame() {
    goalPoints();
    jewelPoints();
    yourPoints = 0;
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#targetPoints").html(targetPoints);
    $("#yourPoints").html(yourPoints);
}

$(document).ready(function () {
    // Start the game
    resetGame();
    // When jewel is pressed...
    $(".jewel-button").on("click", function() {
        // add value to user's total
        var jewelValue = ($(this).attr("jewelValue"));
        jewelValue = parseInt(jewelValue);
        yourPoints += jewelValue;
        $("#yourPoints").html(yourPoints);
        // if points equals target, user win and reset
        if (yourPoints === targetPoints) {
            wins++;
            resetGame();
            $("#message").html("You Win!");
        }
        // if points are over target, user loses and reset
        else if (yourPoints > targetPoints) {
            losses++;
            resetGame();
            $("#message").html("You Lose...");
        }
    })
})

