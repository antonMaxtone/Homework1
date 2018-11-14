Array.prototype.myForEach = function (cb) {
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    cb(item, i, this);
  }
  return this;
};

[5, 4, 3, 2, 1, 0, "my", "For", "Each"].myForEach(function (element, i) {
  console.log("This is 'myForEach' item: ", element, "and index: " + i);
});

Array.prototype.myMap = function (cb) {
  this.arrForMap = [];
  for (var i = 0; i < this.length; i++) {
    var callback = cb(this[i], i, this);
    this.arrForMap.push(callback);
  }
  return this;
};

console.log("This is myMap");
[0, 1, 2, 3, -1, -2, -3].myMap(function (number) {
  number += 2;
  return number;
});

Array.prototype.myFilter = function (cb) {
  this.arrForFilter = [];
  for (var i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      this.arrForFilter.push(this[i]);
    }
  }
  return this;
};
console.log("This is myFilter");
[1, 5, -1, -5, 0, 6, -4].myFilter(function (value) {
  return value > 0;
});

Array.prototype.mySort = function mySort(cb) {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length - i - 1; j++) {
      if (cb) {
        if (cb(this[j], this[j + 1]) > 0) {
          this.temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = this.temp;
        }
      } else if (this[j + 1].toString() < this[j].toString()) {
        this.temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = this.temp;
      }
    }
  }
  return this;
};

function compareNumeric(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
}
[4, 2, 6, -4, 0].mySort(compareNumeric);
