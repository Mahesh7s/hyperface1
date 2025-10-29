Array.prototype.myIncludes = function(valueToFind, fromIndex = 0) {
  const len = this.length;
  if (len === 0) return false;
  let start = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);
  for (let i = start; i < len; i++) {
    if (this[i] === valueToFind || (Number.isNaN(this[i]) && Number.isNaN(valueToFind))) {
      return true;
    }
  }
  return false;
};

Array.prototype.myMap = function(callback, thisArg) {
  const result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    if (i in this) result[i] = callback.call(thisArg, this[i], i, this);
  }
  return result;
};

Array.prototype.myForEach = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) callback.call(thisArg, this[i], i, this);
  }
};

Array.prototype.mySort = function(compareFn) {
  const arr = [...this];
  const cmp = typeof compareFn === "function"
    ? compareFn
    : (a, b) => {
        a = String(a);
        b = String(b);
        return a > b ? 1 : a < b ? -1 : 0;
      };
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (cmp(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Use case
const nums = [3, 1, 4, 1, 5, 9];
console.log(nums.myIncludes(4));       
console.log(nums.myMap(n => n * 2));   
nums.myForEach((n, i) => console.log(`Index ${i}: ${n}`));
console.log(nums.mySort());            
console.log(nums.mySort((a, b) => b - a));
