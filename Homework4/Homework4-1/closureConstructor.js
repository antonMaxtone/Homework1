function Player(games) {
	var goals = 0;
	var assists = 0;

	function goodMatch() {
		if (games >= 10) {
			goals += 10;
			assists += 5;
		}
		console.log("This is a good season: goals - " + goals + ", assists - " + assists)
	}

	function badMatch() {
		if (games < 10) {
			goals = --games;
			assists = goals * games;
		}
		console.log("This is a regular season, but assists are not bad: goals - " + goals + ", assists - " + assists)
	}

	this.rise = function () {
		goodMatch()
	}
	this.fall = function () {
		badMatch()
	}
}
var striker1 = new Player(10);
striker1.rise();
striker1.rise();
striker1.rise();
var striker2 = new Player(5);
striker2.fall();
striker2.fall();
