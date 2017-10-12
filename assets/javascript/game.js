/*Instructions:
The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters. 
Here's how the app works:

There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.

The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

Each crystal should have a random hidden value between 1 - 12.*/

 var counter = 0; 
 var imageCrystal1 = $("<img>");
 var imageCrystal2 = $("<img>");
 var imageCrystal3 = $("<img>");
 var imageCrystal4 = $("<img>");
 var wins = 0;
 var loses = 0;
 $('#wins').text(wins);
$('#loses').text(loses);

  
 //generate number user is trying to match 
 var targetNumber = Math.floor(Math.random() * (1 + 120 - 19)) + 19;
 //show that random number on the screen
 $('#targetNumber').text(targetNumber);
 
 //generate random number assigned to crystals
 var crystalNumberOptions1 = Math.floor(Math.random() * (1 + 12 - 1)) + 1;
var crystalNumberOptions2 = Math.floor(Math.random() * (1 + 12 - 1)) + 1;
var crystalNumberOptions3 = Math.floor(Math.random() * (1 + 12 - 1)) + 1;
var crystalNumberOptions4 = Math.floor(Math.random() * (1 + 12 - 1)) + 1;
 
  // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
 imageCrystal1.addClass("crystal-image"); 
 imageCrystal2.addClass("crystal-image"); 
 imageCrystal3.addClass("crystal-image"); 
 imageCrystal4.addClass("crystal-image"); 
 
  // Each imageCrystal will be given a src link to the crystal image
imageCrystal1.attr("src", "assets/images/crystal-1.png");
 imageCrystal2.attr("src", "assets/images/crystal-2.png");
 imageCrystal3.attr("src", "assets/images/crystal-3.png");
imageCrystal4.attr("src", "assets/images/crystal-4.png");
 
 
 // data added to crystal with crystal option array
imageCrystal1.attr("data-crystalvalue", crystalNumberOptions1);
imageCrystal2.attr("data-crystalvalue", crystalNumberOptions2);
imageCrystal3.attr("data-crystalvalue", crystalNumberOptions3);
imageCrystal4.attr("data-crystalvalue", crystalNumberOptions4);


// add crystals to page
$("#crystal1").append(imageCrystal1);
$("#crystal2").append(imageCrystal2);
$("#crystal3").append(imageCrystal3);
$("#crystal4").append(imageCrystal4);

 // grabs crystal click
  $(".crystal-image").on("click", function() {
    // converts string to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    // add crystal value to counter
    
    counter += crystalValue;
  console.log(counter);
  $("#current-total").text(counter);
  //win results
  if (counter === targetNumber) {
  alert("You win!");
  wins++;
  console.log(wins);
  $("#wins").text(wins);
  reset();
  }
  //lose results
  else if (counter >= targetNumber) {
  alert("You lose!");
  loses++;
  console.log(loses);
  $("#loses").text(loses);
  reset();
  }

  });
  
    function reset(){
      targetNumber=Math.floor(Math.random()*101+19);
      console.log(targetNumber);
      $('#targetNumber').text(targetNumber);
      crystalNumberOptions1= Math.floor(Math.random()*11+1);
      crystalNumberOptions2= Math.floor(Math.random()*11+1);
      crystalNumberOptions3= Math.floor(Math.random()*11+1);
      crystalNumberOptions4= Math.floor(Math.random()*11+1);
      counter= 0;
      crystalValue = 0;
    $("#current-total").text(counter);
      } 