function Tamagochi(name) {
	this.happiness = 10;
	this.health = 10;
	this.talent = 10;
	this.sadness = 10;
	this.boredom = 10;
	this.age = 10;

	var ask = confirm("Do you want play with Pikachu?");
	if (confirm) {
		alert("Open the console and try to play with Pikachu!")
	} else {
		alert("Ok! See you next time!")
	}

	this.eat = function () {
		if (this.happiness == 100 || this.health == 100 && this.boredom == 100) {
			this.happiness += 0;
			this.health += 0;
			this.boredom += 0;
		} else {
			this.happiness += 10;
			this.health += 10;
		}

		console.log(name, "is eating! And now the indicators show us the following results: ");
		this.status();
	}
	this.sleep = function () {}
	this.run = function () {}
	this.play = function () {}
	this.education = function () {}
	this.theEnd = function () {}
	this.status = function () {
		if (this.happiness === 0 || this.health === 0) {
			console.log(name, "returns to the egg...")
		} else if (this.happiness === 100 && this.health === 100 && this.talent === 100) {
			console.log("This is the maximum development. Goodbye!")
		} else if (this.sadness === 100 && this.boredom === 100 && this.age === 100) {
			console.log("It's a failure")
		} else {
			console.log("Happiness is: " + this.happiness + " ; Health is: " + this.health + " ; Talent is :" + this.talent + " ; Sadness is: " + this.sadness + " ; Boredom is : " + this.boredom + " ; Age is: " + this.age);
		}
	}
}

var toy = new Tamagochi("Pikachu");
toy.eat();
toy.eat();
toy.eat();
