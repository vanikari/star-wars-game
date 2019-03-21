

  // list of variables
  var yourCharacterName = "";
  var defenderCharacterName = "";
 
// var playerAttr = {
//     obiWan: {
//         healthPoints: owHealth,
//         counterattackPower: function () {
//             return healthPoints - 
//         }

//     }

//     lukeSky: {

//     }
// } 

//     function defenderCSS() {
//         $(h6).css("color", "white");
//     }


$(document).ready(function() {

// Action when each character is clicked

// Obi-Wan Kenobi
$('#obi-wan').click(function(){
    if ($("#your-character").html() == "") {
        yourCharacterName = $(this);
        yourCharacterName.appendTo($("#your-character"));
        enemyCharacters();
    }

    if ($("#defender").html() !== "") {
        return false;
    }

    else if ($("#obi-wan").parents("#enemies").length == 1) {
        defenderCharacterName = $(this);
        defenderCharacterName.appendTo($("#your-character"));
        $("#obi-wan").appendTo($("#defender"));
        $("#obi-wan.column-2").css("background", "black");
        $("#obi-wan.column-2").css("border", "3px solid green");
        $("#obi-wan-pic-head").css("color", "white");
        $("#obi-wan-health").css("color", "white");
    }

});
// Luke SkyWalker
$('#luke-sky').click(function(){
    if ($("#your-character").html() == "") {
        yourCharacterName = $(this);
        console.log($(this))
        yourCharacterName.appendTo($("#your-character"));
        enemyCharacters();
    }

    if ($("#defender").html() !== "") {
        return false;
    }

    else if ($("#luke-sky").parents("#enemies").length == 1) {
        defenderCharacterName = $(this);
        defenderCharacterName.appendTo($("#defender"));
        $("#luke-sky.column-2").css("background", "black");
        $("#luke-sky.column-2").css("border", "3px solid green");
        $("#luke-sky-pic-head").css("color", "white");
        $("#luke-sky-health").css("color", "white");
    }
});

// Darth Sidious
$('#darth-sid').click(function(){
    if ($("#your-character").html() == "") {
        yourCharacterName = $(this);
        yourCharacterName.appendTo($("#your-character"));
        enemyCharacters();
    }

    if ($("#defender").html() !== "") {
        return false;
    }

    else if ($("#darth-sid").parents("#enemies").length == 1) {
        defenderCharacterName = $(this);
        defenderCharacterName.appendTo($("#defender"));
        $("#darth-sid.column-2").css("background", "black");
        $("#darth-sid.column-2").css("border", "3px solid green");
        $("#darth-sid-pic-head").css("color", "white");
        $("#darth-sid-health").css("color", "white");
    }
});

// Darth Maul
$('#darth-maul').click(function(){
    if ($("#your-character").html() == "") {
        yourCharacterName = $(this);
        yourCharacterName.appendTo($("#your-character"));
        enemyCharacters();
    }

    if ($("#defender").html() !== "") {
        return false;
    }

    else if ($("#darth-maul").parents("#enemies").length == 1) {
        defenderCharacterName = $(this);
        defenderCharacterName.appendTo($("#defender"));
        $("#darth-maul.column-2").css("background", "black");
        $("#darth-maul.column-2").css("border", "3px solid green");
        $("#darth-maul-pic-head").css("color", "white");
        $("#darth-maul-health").css("color", "white");
    }
});

//  Rest of the characters in the character area to move to enemies area when they are not clicked as "your character"
function enemyCharacters() {

    if ($("#obi-wan").parents(".character-area").length == 1 ) {
        $("#obi-wan").appendTo($("#enemies"));
        $("#obi-wan.column-2").css("background", "red");
        $("#obi-wan.column-2").css("border", "3px solid black");
        
    }

    if ($("#luke-sky").parents(".character-area").length == 1 ) {
        $("#luke-sky").appendTo($("#enemies"));
        $("#luke-sky.column-2").css("background", "red");
        $("#luke-sky.column-2").css("border", "3px solid black");
        }

    if ($("#darth-sid").parents(".character-area").length == 1 ) {
        $("#darth-sid").appendTo($("#enemies"));
        $("#darth-sid.column-2").css("background", "red");
        $("#darth-sid.column-2").css("border", "3px solid black");
    }

    if ($("#darth-maul").parents(".character-area").length == 1) {
        $("#darth-maul").appendTo($("#enemies"));
        $("#darth-maul.column-2").css("background", "red");
        $("#darth-maul.column-2").css("border", "3px solid black");
    }

}

// When attack button is clicked, 
var multiply = 0;
var owHealth = 120;
var lsHealth = 100;
var dsHealth = 150;
var dmHealth = 180;

$("#attack").click(function() {

    if ($("#defender").html() == "") {
        $("#defender1").text("No enemy here.");
    }

    // When "your character" is defeated
    if ((owHealth <= 0) && ($("#obi-wan").parents("#your-character").length == 1) ||
        (lsHealth <= 0) && ($("#luke-sky").parents("#your-character").length == 1) || 
        (dsHealth <= 0) && ($("#darth-sid").parents("#your-character").length == 1) ||
        (dmHealth <= 0) && ($("#darth-maul").parents("#your-character").length == 1)) {
        $("#defender1").text("You have been defeated. GAME OVER!");
        $("#defender2").empty();
        restart ();
        return false;
    }

    // When "enemy" is defeated
    if ((owHealth <= 0) && ($("#obi-wan").parents("#defender").length == 1) ||
        (lsHealth <= 0) && ($("#luke-sky").parents("#defender").length == 1) || 
        (dsHealth <= 0) && ($("#darth-sid").parents("#defender").length == 1) ||
        (dmHealth <= 0) && ($("#darth-maul").parents("#defender").length == 1)) {
        var defeatedText = "You have defeated the enemey. You can choose to fight another enemy!";
        $("#defender1").text(defeatedText);
        $("#defender").empty();
        $("#defender2").empty();
        return false;
    }
    
    // When Obi Wan is "your character"
    if ($("#obi-wan").parents("#your-character").length == 1) {
        
        // Luke SKywalker as enemy
        if ($("#luke-sky").parents("#defender").length == 1) {
            owHealth = owHealth - 5;
            multiply = multiply + 1;
            lsHealth = lsHealth - (8 * parseInt(multiply));
            $("#obi-wan-health").html(owHealth);
            $("#luke-sky-health").html(lsHealth);
            var attackText = "You attacked Luke Skywalker for " + (8 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Luke Skywalker attacked you back for " + 5 + " points"
            $("#defender2").text(counterattackText);
        }

        // Darth Sidious as enemy
        if ($("#darth-sid").parents("#defender").length == 1 ) {
            owHealth = owHealth - 20;
            multiply = multiply + 1;
            dsHealth = dsHealth - (8 * parseInt(multiply));
            $("#obi-wan-health").html(owHealth);
            $("#darth-sid-health").html(dsHealth);
            var attackText = "You attacked Darth Sidious for " + (8 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Darth Sidious attacked you back for " + 20 + " points"
            $("#defender2").text(counterattackText);
        }

        // Darth Maul as enemy
        if ($("#darth-maul").parents("#defender").length == 1 ) {
            owHealth = owHealth - 25;
            multiply = multiply + 1;
            dmHealth = dmHealth - (8 * parseInt(multiply));
            $("#obi-wan-health").html(owHealth);
            $("#darth-maul-health").html(dmHealth);
            var attackText = "You attacked Darth Maul for " + (8 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Darth Maul attacked you back for " + 25 + " points"
            $("#defender2").text(counterattackText);
        }
    }

    // When Luke Skywalker is "your character"
    if ($("#luke-sky").parents("#your-character").length == 1) {
        
        // Obi Wan as enemy
        if ($("#obi-wan").parents("#defender").length == 1) {
            lsHealth = lsHealth - 10;
            multiply = multiply + 1;
            owHealth = owHealth - (12 * parseInt(multiply));
            $("#luke-sky-health").html(lsHealth);
            $("#obi-wan-health").html(owHealth);
            var attackText = "You attacked Obi-Wan Kenobi for " + (12 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Obi-Wan Kenobi attacked you back for " + 10 + " points"
            $("#defender2").text(counterattackText);
        }

        // Darth Sidious as enemy
        if ($("#darth-sid").parents("#defender").length == 1 ) {
            lsHealth = lsHealth - 20;
            multiply = multiply + 1;
            dsHealth = dsHealth - (12 * parseInt(multiply));
            $("#luke-sky-health").html(lsHealth);
            $("#darth-sid-health").html(dsHealth);
            var attackText = "You attacked Darth Sidious for " + (12 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Darth Sidious attacked you back for " + 20 + " points"
            $("#defender2").text(counterattackText);
        }
        
        // Darth Maul as enemy
        if ($("#darth-maul").parents("#defender").length == 1 ) {
            lsHealth = lsHealth - 25;
            multiply = multiply + 1;
            dmHealth = dmHealth - (12 * parseInt(multiply));
            $("#luke-sky-health").html(lsHealth);
            $("#darth-maul-health").html(dmHealth);
            var attackText = "You attacked Darth Maul for " + (12 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Darth Maul attacked you back for " + 25 + " points"
            $("#defender2").text(counterattackText);
        }
    }

    // When Darth Sidious is "your character"
    if ($("#darth-sid").parents("#your-character").length == 1) {

        // Obi Wan as enemy
        if ($("#obi-wan").parents("#defender").length == 1) {
            dsHealth = dsHealth - 10;
            multiply = multiply + 1;
            owHealth = owHealth - (8 * parseInt(multiply));
            $("#darth-sid-health").html(dsHealth);
            $("#obi-wan-health").html(owHealth);
            var attackText = "You attacked Obi-Wan Kenobi for " + (8 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Obi-Wan Kenobi attacked you back for " + 10 + " points"
            $("#defender2").text(counterattackText);
        }

        // Luke Skywalker as enemy
        if ($("#luke-sky").parents("#defender").length == 1 ) {
            dsHealth = dsHealth - 5;
            multiply = multiply + 1;
            lsHealth = lsHealth - (8 * parseInt(multiply));
            $("#darth-sid-health").html(dsHealth);
            $("#luke-sky-health").html(lsHealth);
            var attackText = "You attacked Luke Skywalker for " + (8 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Luke Skywalker attacked you back for " + 5 + " points"
            $("#defender2").text(counterattackText);
        }
        
        // Darth Maul as enemy
        if ($("#darth-maul").parents("#defender").length == 1 ) {
            dsHealth = dsHealth - 25;
            multiply = multiply + 1;
            dmHealth = dmHealth - (8 * parseInt(multiply));
            $("#darth-sid-health").html(dsHealth);
            $("#darth-maul-health").html(dmHealth);
            var attackText = "You attacked Darth Maul for " + (8 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Darth Maul attacked you back for " + 25 + " points"
            $("#defender2").text(counterattackText);
        }
    }

    // When Darth Maul is "your character"
    if ($("#darth-maul").parents("#your-character").length == 1) {

        // Obi Wan as enemy
        if ($("#obi-wan").parents("#defender").length == 1) {
            dmHealth = dmHealth - 10;
            multiply = multiply + 1;
            owHealth = owHealth - (6 * parseInt(multiply));
            $("#darth-maul-health").html(dmHealth);
            $("#obi-wan-health").html(owHealth);
            var attackText = "You attacked Obi-Wan Kenobi for " + (6 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Obi-Wan Kenobi attacked you back for " + 10 + " points"
            $("#defender2").text(counterattackText);
        }

        // Luke Skywalker as enemy
        if ($("#luke-sky").parents("#defender").length == 1 ) {
            dmHealth = dmHealth - 5;
            multiply = multiply + 1;
            lsHealth = lsHealth - (6 * parseInt(multiply));
            $("#darth-maul-health").html(dmHealth);
            $("#luke-sky-health").html(lsHealth);
            var attackText = "You attacked Luke Skywalker for " + (6 * parseInt(multiply)) + " points";
            $("#defender1").text(attackText);
            var counterattackText = "Luke Skywalker attacked you back for " + 5 + " points";
            $("#defender2").text(counterattackText);
        }
        
        // Darth Sidious as enemy
        if ($("#darth-sid").parents("#defender").length == 1 ) {
            dmHealth = dmHealth - 20;
            multiply = multiply + 1;
            dsHealth = dsHealth - (6 * parseInt(multiply));
            $("#darth-maul-health").html(dmHealth);
            $("#darth-sid-health").html(dsHealth);
            var attackText = "You attacked Darth Sidious for " + (6 * parseInt(multiply)) + " points"
            $("#defender1").text(attackText);
            var counterattackText = "Darth Sidious attacked you back for " + 20 + " points"
            $("#defender2").text(counterattackText);
        }
    }

});

});

// Once "your-character" is defeated, restart buttun should appear
function restart () {
    var restartButton = $("<button>").text("Restart");
    restartButton.appendTo($("#restart"));
    $('#attack').off('click');
};

// clicking the restart button should go to the original html page
$("#restart").click(function() {
    location.reload();
});


