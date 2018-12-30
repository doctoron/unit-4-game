// Declaration of variables & places them into the DOM
$(document).ready(function() {
  let randomNumber = 0;
  let targetNumber = 0;
  let totalScore = 0;
  let gemHigh = 12;
  let gemLow = 1;
  let gameHigh = 120;
  let gameLow = 19;
  let wins = 0;
  let losses = 0;
  startGame();
  getGems();
  
  
  $("#crystals").on("click", ".img-fluid", function() {
    let crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    // The addition assignment operator (+=) adds crystalValue to existing totalScore.
    totalScore += crystalValue;  
    $("#total-score").text(totalScore);
    
    // alert("New score: " + totalScore);
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    if (totalScore === targetNumber) {
      alert("You win!");
      wins++;
      startGame();
      getGems();
      
    } else if (totalScore > targetNumber) {
      alert("You're Busted!!");
      losses++;
      startGame();
      getGems();
    } 
  });
  
  
  function startGame() {
    gameHigh = 120;
    gameLow = 19;
    totalScore = 0; 
    randomNumber = 0;
    targetNumber = randoMizer(gameHigh,gameLow);
    $("#target-number").text(targetNumber);
    $("#total-score").text(totalScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#instruct-text").text()
    $("#crystals").empty();
  }
let playHelp = function onPlayHelp(onclick) {
      document.getElementById("#help-text").style.display = "block";
      document.getElementById("#help-text").innerHTML=(`${playHelpText}`); 
    }
    function offPlayHelp() {
      $(document.getElementById("instruct-text").style.display = "none");
    }
  let playHelpText=[
  "The Target Number has been randomly generated.",
  "Clicking on a crystal will add points to your Total Score.",
  "Points will be hidden until the crystal is chosen.",
  "Win if your total score matches the Target Number."
]
  function getGems() {
    var gemImageArray = [
      "assets/images/Amethyst_Healing.jpg",
      "assets/images/Rose-quartz-heart.jpg",
      "assets/images/Verdite.jpg",
      "assets/images/Black-onyx2.jpg"
    ];    
    
    for (var i = 0; i < gemImageArray.length; i++) {
      let imageCrystal = $(  "<img>");  
      imageCrystal.addClass("img-fluid");
      
      let imageName = gemImageArray[i];
      imageCrystal.attr("src",imageName);
      
      let randomNumber = randoMizer(gemHigh,gemLow);
      imageCrystal.attr("data-crystalValue", randomNumber);
      
      $("#crystals").append(imageCrystal);
    }
  }
});


function randoMizer(high,low) {
  targetNumber = Math.floor(Math.random() * (high - low + 1) + low);
  return targetNumber;
  
};


/* <a href="#" data-toggle="popover" title="Popover Header" 
data-content="Some content inside the popover">Toggle popover</a> */

/*$("#instructions").on("hover", "#instruct-title", function instruct() {
  let instrutText = ($(this).attr("/unit-4-game/instructions.md"));
  $("instruct-text").append(instrutText);
  return instruct(); */
  
/*$(function(){
  $('[data-toggle="instruct-text"]').popover()
    }); */

// display instructions on hover
// var myFunction = function (a, b) {return a * b};
// var x = myFunction(4, 3);
// Function randoMizer() to generate a random number based on parameters (num1, num2)
// var targetNumber = Math.floor(Math.random() * 120) +19;
// console.log("Target Number: " + targetNumber);
// Determining the crystal's value requires us to extract the value from the data attribute.
// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
// Using the .attr("data-crystalValue") allows us to grab the value out of the "data-crystalValue" attribute.
// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter 'totalScore'
// Now for the hard part. Creating multiple crystals each with their own unique number value.
// We begin by expanding our array to include four options.
// To gain better understanding of this process, I borrowed this approach from my cohort, "Tamekia": 
// Using the gemImageArray for creating crystal images for every numberOption iteration:  
// This time, our click event applies to every single crystal on the page. Not just one.
// console.log("ParseInt(crystalValue): " + crystalValue);  
// We then add the crystalValue to the user's "totalScore" which is a global variable.
// Every click, from every crystal adds to the global counter.
// console.log("totalScore:" totallScore);
// 1. For each iteration, we will create an imageCrystal with $();
// 2. Next each crystal will be given the *class* ".img-fluid".
// This will allow the CSS to take effect.
// 3. Each imageCrystal will be given a src link to the crystal image
/*  FINGERS CROSSED: If this works then all these lines will not be necessary:
imageCrystal.attr("src", "assets/images/Amethyst_Healing.jpg");
imageCrystal.attr("src", "assets/images/Rose-quartz-heart.jpg");
imageCrystal.attr("src", "assets/images/Verdite.jpg");
imageCrystal.attr("src", "assets/images/Black-onyx2.jpg");*/     
// Created loop to create crystals for every gemImageArray.
// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
// Declaration of variables & places them into the DOM
// Now for the hard part. Creating multiple crystals each with their own unique number value.
// We begin by expanding our array to include four options.
// To gain better understanding of this process, I borrowed this approach from my cohort, "Tamekia": 
// Using the gemImageArray for creating crystal images for every numberOption iteration:
// var numberOptions = [10, 5, 3, 7];
  