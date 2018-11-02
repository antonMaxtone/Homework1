// [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
// [7, 0, 1, 3, 4, 1, 2, 1] // 9
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
// [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
// [2, 2, 2, 2, 2] // 0
function mountainWater(arr) {
	var maxLeftMountain = Math.max(...arr);
	var maxLeftInd = arr.indexOf(maxLeftMountain);
	var leftMountain = 0;
	var leftMountainInd;
	var sumLeftMountain = 0;

	while (maxLeftInd) {
		for (var i = maxLeftInd - 1; i >= 0; i--) {
			if (arr[i] > leftMountain) {
				leftMountain = arr[i];
			}
		}
		leftMountainInd = arr.indexOf(leftMountain);
		for (var l = maxLeftInd - 1; l > leftMountainInd; l--) {
			sumLeftMountain += (arr[leftMountainInd] - arr[l]);
		}
		maxLeftMountain = leftMountain;
		maxLeftInd = arr.indexOf(maxLeftMountain);
		leftMountain = 0;
	}

	var maxRightMountain = Math.max(...arr);
	var maxRightInd = arr.indexOf(maxRightMountain);
	var rightMountain = 0;
	var rightMountainInd;
	var sumRightMountain = 0;

	while (maxRightInd < (arr.length - 1)) {
		for (var i = maxRightInd + 1; i < arr.length; i++) {
			if (arr[i] > rightMountain) {
				rightMountain = arr[i];
			}
		}
		rightMountainInd = arr.lastIndexOf(rightMountain);
		for (var l = maxRightInd + 1; l < rightMountainInd; l++) {
			sumRightMountain += (arr[rightMountainInd] - arr[l]);
		}
		maxRightMountain = rightMountain;
		maxRightInd = arr.lastIndexOf(maxRightMountain);
		rightMountain = 0;
	}
	return sumLeftMountain + sumRightMountain;
}

var arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24 
console.log(mountainWater(arr));
