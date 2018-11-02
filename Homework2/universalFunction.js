var x = [2, 1, 4, 5, 6];

function universalFunction(x, y) {
	if (y === "min") {
		y = Math.min(...x);
	} else if (y === "max") {
		y = Math.max(...x);
	} else if (y === "sum") {
		y = x.reduce(function (sum, current) {
			return sum + current;
		});
	}
	return y;
}


console.log(universalFunction(x, "min"));
console.log(universalFunction(x, "max"));
console.log(universalFunction(x, "sum"));
