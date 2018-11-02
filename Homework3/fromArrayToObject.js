var arr = [1, 2, 3, 0, "name", "age"];

function fromArrayToObject(arr) {
	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		obj[arr[i]] = i;
	}
	return obj;
}

console.log(fromArrayToObject(arr));
