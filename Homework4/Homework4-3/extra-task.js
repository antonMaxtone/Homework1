function positionsCoordinates(R, C, r0, c0) {
  var coordinateList = [];
  coordinateList.push([r0, c0]);

  var maxi = Math.max(r0, c0, R - 1 - r0, C - 1 - c0);

  for (var i = 1; i <= maxi; i++) {
    for (var j = 1 - i; j <= i; j++) {
       coordinateList.push([r0 + j, c0 + i]);
    } 
    for (var j = i - 1; j >= -i; j--) {
      coordinateList.push([r0 + i, c0 + j]);
    }  
    for (var j = i - 1; j >= -i; j--) {
      coordinateList.push([r0 + j, c0 - i]); 
    } 
    for (var j = 1 - i; j <= i; j++) {
      coordinateList.push([r0 - i, c0 + j]); 
    } 
  }
  return coordinateList.filter(x => x[0] >= 0 && x[0] < R && x[1] >= 0 && x[1] < C);
}

positionsCoordinates(1,4,0,0); 
positionsCoordinates(5,6,1,4);