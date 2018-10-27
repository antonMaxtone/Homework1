//first array

var arr1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];

function array1Min(arr1) {
	var len = arr1.length,
		min = Infinity;
	while (len--) {
		if (arr1[len] < min) {
			min = arr1[len];
		}
	}
	return min;
}

console.log(array1Min(arr1));

function array1Max(arr1) {
	var len = arr1.length,
		max = -Infinity;
	while (len--) {
		if (arr1[len] > max) {
			max = arr1[len];
		}
	}
	return max;
}

console.log(array1Max(arr1));

function sumArray1(arr1) {
	var sum = 0;
	var len = arr1.length;
	for (var i = 0; i < len; i++) {
		sum += arr1[i];
	}
	return sum;
}

console.log(sumArray1(arr1));



//second array

var arr2 = [-1, -8, -2];

function array2Min(arr2) {
	var len = arr2.length;
	var min = Infinity;
	while (len--) {
		if (arr2[len] < min) {
			min = arr2[len];
		}
	}
	return min;
}

console.log(array2Min(arr2));

function array2Max(arr2) {
	var len = arr2.length;
	var max = -Infinity;
	while (len--) {
		if (arr2[len] > max) {
			max = arr2[len];
		}
	}
	return max;
}

console.log(array2Max(arr2));

function sumArray2(arr2) {
	var sum = 0;
	var len = arr2.length;
	for (var i = 0; i < len; i++) {
		sum += arr2[i];
	}
	return sum;
}

console.log(sumArray2(arr2));



//third array

var arr3 = [1, 7, 3];

function arr3Min(arr3) {
	var len = arr3.length;
	var min = Infinity;
	while (len--) {
		if (arr3[len] < min) {
			min = arr3[len];
		}
	}
	return min;
}

console.log(arr3Min(arr3));

function arr3Max(arr3) {
	var len = arr3.length;
	var max = -Infinity;
	while (len--) {
		if (arr3[len] > max) {
			max = arr3[len];
		}
	}
	return max;
}

console.log(arr3Max(arr3));

function sumArray3(arr3) {
	var sum = 0;
	var len = arr3.length;
	for (var i = 0; i < len; i++) {
		sum += arr3[i];
	}
	return sum;
}

console.log(sumArray3(arr3));



//fourth array

var arr4 = [1, undefined, 3, 5, -3];

function arr4Min(arr4) {
	var len = arr4.length;
	var min = Infinity;
	while (len--) {
		if (arr4[len] < min) {
			min = arr4[len];
		}
	}
	return min;
}

console.log(arr4Min(arr4));

function arr4Max(arr4) {
	var len = arr4.length;
	var max = -Infinity;
	while (len--) {
		if (arr4[len] > max) {
			max = arr4[len];
		}
	}
	return max;
}

console.log(arr4Max(arr4));

function sumArray4(arr4) {
	var sum = 0;
	var len = arr4.length;
	for (var i = 0; i < len; i++) {
		if (arr4[i] != undefined) {
			sum += arr4[i];
		}
	}
	return sum;
}
console.log(sumArray4(arr4));



//fifth array

var arr5 = [1, NaN, 3, 5, -3];

function arr5Min(arr5) {
	var len = arr5.length;
	var min = Infinity;
	while (len--) {
		if (arr5[len] < min) {
			min = arr5[len];
		}
	}
	return min;
}

console.log(arr5Min(arr5));

function arr5Max(arr5) {
	var len = arr5.length;
	var max = -Infinity;
	while (len--) {
		if (arr5[len] > max) {
			max = arr5[len];
		}
	}
	return max;
}

console.log(arr5Max(arr5));

function sumArray5(arr5) {
	var len = arr5.length;
	var sum = 0;
	for (var i = 0; i < len; i++) {
		//		sorry, but "arr[i] != Nan" - does not work(
		if (!isNaN(arr5[i])) {
			sum += arr5[i];
		}
	}
	return sum;
}

console.log(sumArray5(arr5));
