var arr = [1, 2, 3, -1, -2, -3];

Array.prototype.myForEach = function (cb) {
	for (var i = 0; i < arr.length; i++) {
		var item = arr[i];
		cb(item, i, arr);
	}
	return arr;
}

arr.myForEach(function (element) {
	console.log("This is 'myForEach'", element);
});


Array.prototype.myMap = function (cb) {
	var arrForMap = [];
	for (var i = 0; i < arr.length; i++) {
		var callback = cb(arr[i], i, arr);
		arrForMap.push(callback);
	}
	return arr;
}

console.log("This is myMap");
arr.myMap(function (number) {
	return number;
});


Array.prototype.myFilter = function (cb) {
	var arrForFilter = [];
	for (var i = 0; i < arr.length; i++) {
		if (cb(arr[i], i, arr))
			arrForFilter.push(arr[i]);
	}
	return arr;
};
console.log("This is myFilter");
arr.myFilter(function (value) {
	return value > 0;
});


Array.prototype.mySort = function mySort() {
	var temp;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

function compareNumeric(a, b) {
	if (a > b) return 1;
	if (a < b) return -1;
}
arr.mySort(compareNumeric);
