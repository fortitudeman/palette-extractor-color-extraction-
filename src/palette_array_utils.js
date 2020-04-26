/**
 * @fileoverview A small collection of array utilities.
 */
const arrayUtils = {};

/**
 * Does a shallow copy of an array.
 * @param {IArrayLike<T>|string} arr Array or array-like object to clone.
 * @return {!Array<T>} Clone of the input array.
 */
arrayUtils.clone = function(arr) {
    var length = arr.length;
    if (length > 0) {
        var rv = new Array(length);
        for (var i = 0; i < length; i++) {
            rv[i] = arr[i];
        }
        return rv;
    }
    return [];
};

/**
 * Returns an array consisting of the given value repeated N times.
 * @param {VALUE} value The value to repeat.
 * @param {number} n The repeat count.
 * @return {!Array<VALUE>} An array with the repeated value.
 */
arrayUtils.repeat = function(value, n) {
    var array = [];
    for (var i = 0; i < n; i++) {
        array[i] = value;
    }
    return array;
};