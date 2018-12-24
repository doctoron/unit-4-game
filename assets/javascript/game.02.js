// Declaration of variables & places them into the DOM

$(document).ready(function() {
  var randomNumber = 0;
  var targetNumber = 0;
  var totalScore = 0;
  var gemHigh = 12;
  var gemLow = 1;
  var gameHigh = 120;
  var gameLow = 19;
  var wins = 0;
  var losses = 0;
  startGame();
  getGems();


$("#crystals").on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
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
      $("#total-score").text(totalScore);
      $("#target-number").text(targetNumber);
      $("#wins").text(wins);
      $("#losses").text(losses);
      $("#crystals").empty();
    }
    
    
    function getGems() {
      var gemImageArray = [
        "assets/images/Amethyst_Healing.jpg",
        "assets/images/Rose-quartz-heart.jpg",
        "assets/images/Verdite.jpg",
        "assets/images/Black-onyx2.jpg"
      ];    
      
      for (var i = 0; i < gemImageArray.length; i++) {
        let imageCrystal = $(  "<img>");  
          imageCrystal.addClass("crystal-image");
        
        let imageName = gemImageArray[i];
          imageCrystal.attr("src",imageName);
        
        let randomNumber = randoMizer(gemHigh,gemLow);
          imageCrystal.attr("data-crystalValue", randomNumber);
        
        $("#crystals").append(imageCrystal);
      }
    }
  });                    
  function randoMizer(high, low) {
      targetNumber = Math.floor(Math.random() * (high - low + 1) + low);
      return targetNumber;
    }

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
  // 2. Next each crystal will be given the *class* ".crystal-image".
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
  