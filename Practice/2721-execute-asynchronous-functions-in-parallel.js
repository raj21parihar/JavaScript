// 2721. Execute Asynchronous Functions in Parallel

/* 
Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.
promise resolves:
When all the promises returned from functions were resolved successfully. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.
promise rejects:
When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
 */

//Solution

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        let count = functions.length;
        let answer = new Array(count);

        if (count === 0) {
            resolve(answer);
            return;
        }

        functions.forEach(function (element, index) {
            element()
                .then(function (ans) {
                    answer[index] = ans;
                    count--;
                    if (count == 0) {
                        resolve(answer);
                    }
                })
                .catch(function (err) {
                    reject(err);
                });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
