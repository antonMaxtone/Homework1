function Tamagochi(name) {
  this.happiness = 10;
  this.health = 10;
  this.talent = 10;
  this.sadness = 10;
  this.boredom = 10;
  this.age = 10;

  var ask = confirm("Do you want play with Pikachu?");
  if (ask) {
    alert("Open the console and try to play with Pikachu!");
  } else {
    alert("Ok! See you next time!");

  }
  alert(ask);

  this.eat = function () {
    this.happiness += this.happiness + 10 < 100 ? 10 : 100 - this.happiness,
    this.health += this.health + 10 < 100 ? 10 : 100 - this.health;

    console.log(
      name,
      " is ate! And now the indicators show us the following results: "
    );
    this.status();
  };

  this.sleep = function () {
    this.happiness += this.hapinness + 10 < 100 ? 10 : 100 - this.happiness,
    this.health += this.health + 10 < 100 ? 10 : 100 - this.health,
    this.boredom += this.boredom + 10 < 100 ? 10 : 100 - this.boredom,
    this.age += this.age + 10 < 100 ? 10 : 100 - this.age;

    console.log(
      name,
      " is slept! And now the indicators show us the following results: "
    );
    this.status();
  };

  this.swim = function () {
    this.happiness += this.happiness + 10 < 100 ? 10 : 100 - this.happiness,
    this.health += this.health + 10 < 100 ? 10 : 100 - this.health,
    this.sadness -= this.sadness - 10 > 0 ? -10 : 0 + this.sadness;

    console.log(
      name,
      "is swam! And now the indicators show us the following results: "
    );
    this.status();
  };

  this.play = function () {
    this.happiness += this.happiness + 10 < 100 ? 10 : 100 - this.happiness,
    this.boredom -= this.boredom - 10 > 0 ? -10 : 0 + this.boredom; 

  console.log(
    name,
    "is played! And now the indicators show us the following results: "
  );
  this.status();
};

this.education = function () {
  this.age += this.age + 10 < 100 ? 10 : 100 - this.age,
  this.talent += this.talent + 10 < 100 ? 10 : 100 - this.talent; 

  console.log(
    name,
    "is learned! And now the indicators show us the following results: "
  );
  this.status();
};

this.fell = function () {
  this.happiness -= this.happiness - 10 > 0 ? -10 : 0 + this.happiness ,
  this.sadness += this.sadness + 10 < 100 ? 10 : 100 - this.sadness,
  this.health -= this.health - 10 > 0 ? -10 : 0 + this.health;

  console.log(
    name,
    "is fell! And now the indicators show us the following results: "
  );
  this.status();
};

this.accidentallyDisappearedInTheForest = function () {
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

this.status = function () {
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
toy.swim();
toy.play();
toy.education();
//toy.accidentallyDisappearedInTheForest();

//var timerId = this.setInterval(function getLost() {
//	if (toy.accidentallyDisappearedInTheForest) {
//		this.clearInterval(timerId);
//	}
//	toy.randFunc();
//}, 2000);
