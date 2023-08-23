// 2727. Is Object Empty

/* 
Given an object or an array, return if it is empty.
    An empty object contains no key-value pairs.
    An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
 */

//Solution

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

var isEmpty = function (obj) {
    for (let i in obj) {
        return false;
    }
    return true;
};
