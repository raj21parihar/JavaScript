//2677. Chunk Array

/* 
Given an array arr and a chunk size size, return a chunked array.
A chunked array contains the original elements in arr, but consists of
subarrays each of length size. The length of the last subarray may be less than size if arr.
length is not evenly divisible by size.
You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
Please solve it without using lodash's _.chunk function.
 */

//Solution

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

//Solution 1
// var chunk = function(arr, size) {
//     let ans = [];
//     let chunk = [];
//     let count = 1;
//     arr.forEach(function(element, index){
//         chunk.push(element);
//         if(count == size || arr.length-1 == index){
//             ans.push(chunk);
//             chunk = [];
//             count = 1;
//         } else{
//             count++;
//         }
//     });
//     return ans;
// };

//Solution 2
var chunk = function (arr, size) {
    let ans = [];
    index = 0;
    while (index < arr.length) {
        ans.push(arr.slice(index, index + size));
        index += size;
    }
    return ans;
};
