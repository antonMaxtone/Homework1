var arr1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
var arr2 = [-1, -8, -2];
var arr3 = [1, 7, 3];
var arr4 = [1, undefined, 3, 5, -3];
var arr5 = [1, NaN, 3, 5, -3];

function arrayMin(arr) {
	var len = arr.length;
	var min = Infinity;
	while (len--) {
		if (arr[len] < min) {
			min = arr[len];
		}
	}
	return min;
}

console.log(arrayMin(arr1));
console.log(arrayMin(arr2));
console.log(arrayMin(arr3));
console.log(arrayMin(arr4));
console.log(arrayMin(arr5));



function arrayMax(arr) {
	var len = arr.length;
	var max = -Infinity;
	while (len--) {
		if (arr[len] > max) {
			max = arr[len];
		}
	}
	return max;
}

console.log(arrayMax(arr1));
console.log(arrayMax(arr2));
console.log(arrayMax(arr3));
console.log(arrayMax(arr4));
console.log(arrayMax(arr5));



function sumArray(arr) {
	var sum = 0;
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		if (arr[i] !== undefined && !isNaN(arr[i]) && arr[i] !== null && arr[i] !== Infinity && arr[i] !== -Infinity) {
			sum += arr[i];
		}
	}
	return sum;
}

console.log(sumArray(arr1));
console.log(sumArray(arr2));
console.log(sumArray(arr3));
console.log(sumArray(arr4));
console.log(sumArray(arr5));
