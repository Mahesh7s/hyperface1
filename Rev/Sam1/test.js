function myMap(array, callback, thisArg) {
  const result = new Array(array.length); // maintain same length

  for (let i = 0; i < array.length; i++) {
    // Skip holes in sparse arrays
    if (i in array) {
      // Call the callback with correct context
      result[i] = callback.call(thisArg, array[i], i, array);
    }
    // else leave as empty slot (undefined)
  }

  return result;
}

// Example usage
const numbers = [1, , 3, 4]; // sparse array
const context = { factor: 2 };

const multiplied = myMap(numbers, function(num) {
  return num * this.factor;
}, context);

console.log(multiplied); // [2, , 6, 8]
