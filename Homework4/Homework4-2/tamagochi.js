function Tamagochi(name) {
  this.happiness = 10;
  this.health = 10;
  this.talent = 10;
  this.sadness = 10;
  this.boredom = 10;
  this.age = 10;

  confirm("Do you want play with Pikachu?");
  if (true) {
    alert("Open the console and try to play with Pikachu!");
  } else {
    alert("Ok! See you next time!");
  }

  this.eat = function() {
    if (this.happiness == 100 || this.health == 100) {
      this.happiness += 0;
      this.health += 0;
    } else {
      this.happiness += 10;
      this.health += 10;
    }

    console.log(
      name,
      " is ate! And now the indicators show us the following results: "
    );
    this.status();
  };

  this.sleep = function() {
    if (
      this.happiness == 100 ||
      this.health == 100 ||
      this.boredom == 100 ||
      this.age == 100
    ) {
      this.happiness += 0;
      this.health += 0;
      this.boredom += 0;
      this.age += 0;
    } else {
      this.happiness += 10;
      this.health += 10;
      this.boredom += 10;
      this.age += 10;
    }
    console.log(
      name,
      " is slept! And now the indicators show us the following results: "
    );
    this.status();
  };

  this.swim = function() {
    if (this.happiness === 100 || this.health === 100 || this.sadness === 0) {
      this.happiness += 0;
      this.health += 0;
      this.sadness += 0;
    } else {
      this.happiness += 10;
      this.health += 10;
      this.sadness -= 10;
    }
    console.log(
      name,
      "is swam! And now the indicators show us the following results: "
    );
    this.status();
  };

  this.play = function() {
    if (this.happiness === 100 || this.boredom === 0) {
      this.happiness += 0;
      this.boredom += 0;
    } else {
      this.happiness += 10;
      this.boredom -= 10;
    }
    console.log(
      name,
      "is played! And now the indicators show us the following results: "
    );
    this.status();
  };

  this.education = function() {
    if (this.age == 100 || this.talent == 100) {
      this.age += 0;
      this.talent += 0;
    } else {
      this.age += 10;
      this.talent += 10;
    }
    console.log(
      name,
      "is learned! And now the indicators show us the following results: "
    );
    this.status();
  };
  this.fell = function() {
    if (this.happiness === 0 || this.sadness === 100 || this.health === 0) {
      this.happiness += 0;
      this.sadness += 0;
      this.health += 0;
    } else {
      this.happiness -= 10;
      this.boredom += 10;
      this.health -= 10;
    }
    console.log(
      name,
      "is fell! And now the indicators show us the following results: "
    );
    this.status();
  };

  this.accidentallyDisappearedInTheForest = function() {
    this.happiness = undefined;
    this.health = undefined;
    this.talent = undefined;
    this.sadness = undefined;
    this.boredom = undefined;
    this.age = undefined;
    this.status();
    console.log(
      "Sorry, but your Pikachu accidentally disappeared in the forest..."
    );
    // breakTimer
  };

  this.status = function() {
    if (this.happiness === 0 || this.health === 0) {
      console.log(name, "returns to the egg...");
    } else if (
      this.happiness === 100 &&
      this.health === 100 &&
      this.talent === 100
    ) {
      console.log("This is the maximum development. Goodbye!");
    } else if (
      this.sadness === 100 &&
      this.boredom === 100 &&
      this.age === 100
    ) {
      console.log("It's a failure");
    } else {
      console.log(
        "Happiness is: " +
          this.happiness +
          " ; Health is: " +
          this.health +
          " ; Talent is :" +
          this.talent +
          " ; Sadness is: " +
          this.sadness +
          " ; Boredom is : " +
          this.boredom +
          " ; Age is: " +
          this.age
      );
    }
  };

//  	this.arrFunc = [this.accidentallyDisappearedInTheForest, this.fell, this.education, this.play, this.swim, this.sleep, this.eat];
//  	this.randFunc = function () {
//      this.arrFunc[Math.floor(Math.random() * this.arrFunc.length)]();
//  	};
}

var toy = new Tamagochi("Pikachu");
toy.eat();
toy.sleep();
toy.swim();
toy.play();
toy.fell();
toy.education();
//toy.accidentallyDisappearedInTheForest();



//var timerId = this.setInterval(function getLost() {
//	if (toy.accidentallyDisappearedInTheForest) {
//		this.clearInterval(timerId);
//	}
//	toy.randFunc();
//}, 2000);
