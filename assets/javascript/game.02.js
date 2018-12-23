js
// Declaration of variables
var counter = 0; //accumulator of numerica value
var wins = 0;
var losses = 0;
var targetNumber = 0;
var totalScore = 0;
var high = 12;
var low = 1;

// function to generate a random number based on parameters (num1, num2)
functon getRandomNum(num1, num2) {
targetNumber = Math.floor(Math.random() * (num1, num2) * 120 +19
}

// var targetNumber = Math.floor(Math.random() * 120) +19;
console.log("Target Number: " + targetNumber);

$("#number-to-guess").text(targetNumber);
$("#wins").text("wins:" + counter);
$("#losses").text(counter);


//

// Now for the hard part. Creating multiple crystals each with their own unique number value.
// We begin by expanding our array to include four options.
var numberOptions = [10, 5, 3, 7];
// Next we create a for loop to create crystals for every numberOption.
var imageSrcArray = [
  "assets/images/Amethyst_Healing.jpg",
  "assets/images/Rose-quartz-heart.jpg",
  "assets/images/Verdite.jpg",
  "assets/images/Black-onyx2.jpg"
];
for (var i = 0; i < numberOptions.length-1; i++) {
  
  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");
  
  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");
  
  // Each imageCrystal will be given a src link to the crystal image
  imageName = imageSrcArray[i];
  imageCrystal.attr("src",imageName);
  /*  imageCrystal.attr("src", "assets/images/Amethyst_Healing.jpg");
  imageCrystal.attr("src", "assets/images/Rose-quartz-heart.jpg");
  imageCrystal.attr("src", "assets/images/Verdite.jpg");
  imageCrystal.attr("src", "assets/images/Black-onyx2.jpg");*/     
  
  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalValue", numberOptions[i]);
  
  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //   $("#crystals").append(imageCrystal);
  $(".crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalValue") allows us to grab the value out of the "data-crystalValue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
  var crystalValue = ($(this).attr("data-crystalValue"));
  crystalValue = parseInt(crystalValue);
  console.log("ParseInt(crystalValue): " + crystalValue);
  
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
    // initGame();
    // initGems();
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    losses++;
    // initGame();
    // initGems();

  }

});
