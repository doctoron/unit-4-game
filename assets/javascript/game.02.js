
// Declaration of variables & places them into the DOM
$(document).ready(function() {
var counter = 0; //accumulator of numerical value
var wins = 0;
var losses = 0;
var targetNumber = 0;
var totalScore = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

var numberOptions = [10, 5, 3, 7];

// We begin by expanding our array to include four options.
// To gain better understanding of this process, I borrowed this approach from my cohort, "Tamekia": 
// Using the imageSrcArray for creating crystal images for every numberOption iteration:

var imageSrcArray = [
  "assets/images/Amethyst_Healing.jpg",
  "assets/images/Rose-quartz-heart.jpg",
  "assets/images/Verdite.jpg",
  "assets/images/Black-onyx2.jpg"
];

// Created a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {
  
  // 1. For each iteration, we will create an imageCrystal with $();
  var imageCrystal = $("<img>");
  
  // 2. Next each crystal will be given the *class* ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");
  
  
  // 3. Each imageCrystal will be given a src link to the crystal image
  /*  FINGERS CROSSED: If this works then all these lines will not be necessary:
  imageCrystal.attr("src", "assets/images/Amethyst_Healing.jpg");
  imageCrystal.attr("src", "assets/images/Rose-quartz-heart.jpg");
  imageCrystal.attr("src", "assets/images/Verdite.jpg");
  imageCrystal.attr("src", "assets/images/Black-onyx2.jpg");*/     
  
  var imageName = imageSrcArray[i];
  imageCrystal.attr("src",imageName);
  
  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  
  imageCrystal.attr("data-crystalValue", numberOptions[i]);
  
  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //   $("#crystals").append(imageCrystal);
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalValue") allows us to grab the value out of the "data-crystalValue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
  var crystalValue = ($(this).attr("data-crystalValue"));
  crystalValue = parseInt(crystalValue);
  // console.log("ParseInt(crystalValue): " + crystalValue);
  
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  console.log("Counter:" + counter);
  
  $("#counter").text(counter);
  
  
  // All of the same game win-lose logic applies. So the rest remains unchanged.
  
  alert("New score: " + counter);
  
  if (counter === targetNumber) {
    alert("You win!");
    wins++;
    initGame();
    initGems();
  }
  
  else if (counter >= targetNumber) {
    alert("You lose!!");
    losses++;
    initGame();
    initGems();
    
  }
  
});
function initGame() {
  totalScore = 0;
  randomNumber = 0;
  targetNumber = randoMizer(12,1)
  $("#total-score").text(totalScore)
  $("#number-to-guess").text(targetNumber);
  $("#wins").text("wins:" + wins);
  $("#losses").text(losses);
  $("#crystals").empty();
}

// Function randoMizer() to generate a random number based on parameters (num1, num2)
// var targetNumber = Math.floor(Math.random() * 120) +19;
// console.log("Target Number: " + targetNumber);

function randoMizer(num1, num2) {
  targetNumber = Math.floor(Math.random() * (a - b + 1) + b);
  return targetNumber;
}

function initGems() {
  var imageSrcArray = [
    "assets/images/Amethyst_Healing.jpg",
    "assets/images/Rose-quartz-heart.jpg",
    "assets/images/Verdite.jpg",
    "assets/images/Black-onyx2.jpg"
  ];
  for (var i=0;i < imageSrcArray.length; i++) {
    var imageCrystal =$("<img>");
    imageCrystal.addClass("crystal-image");
    imageName =imageSrcArray[i];
    imageCrystal.attr("src", imageName);
    randomNumber = randoMizer(12,1);
    imageCrystal.attr("data-crystalvalue",randomNumber);
    $("#crystals").append(imageCrystal);

  }
  }
});