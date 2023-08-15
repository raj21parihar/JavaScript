/* 2705. Compact Object
Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 */

// Solution

/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        let newObj = new Object();
        for (let key in obj) {
            if (Boolean(obj[key])) {
                console.log(obj[key]);
                newObj[key] = compactObject(obj[key]);
            }
        }
        return newObj;
    } else {
        return obj;
    }
};
