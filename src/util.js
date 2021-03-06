/**
 * Utilities for supporting algorithm code
 *
 * @class util
 */
module.exports = {
  /**
   * isSorted() checks if an array is sorted.
   * By default it just compares values in array.
   *
   * @method isSorted
   * @param {Array} arr The array to check
   * @return {Boolean} Returns whether the array is sorted
   */
  isSorted: function (arr) {
    var _sorted = true;

    arr.forEach(function (value, index, array) {
      if (array[index + 1]) {

        if (array[index] > array[index + 1]) {
          _sorted = false;
        }
      }
    });

    return _sorted;
  },
  /**
   * swap() exchanges two items in an array
   *
   * @method swap
   * @param {Array} arr The source array
   * @param {Number} firstIndex The index of the first item in the swap
   * @param {Number} secondIndex The index of the second item in the swap
   * @return {Array} Returns the array with the two items swapped
   */
  swap: function (arr, firstIndex, secondIndex) {
    var firstItem = arr[firstIndex];
    var secondItem = arr[secondIndex];
    arr[firstIndex] = secondItem;
    arr[secondIndex] = firstItem;
    return arr;
  }
};