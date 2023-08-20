//2715. Timeout Cancellation

/* 
Given a function fn, an array of arguments args, and a timeout t in milliseconds
return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless
cancelFn was invoked before the delay of t milliseconds elapses,
specifically at cancelT ms. In that case, fn should never be called.
 */

//Solution 1

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    const temp = setTimeout(function () {
        fn(...args);
    }, t);
    return function () {
        clearTimeout(temp);
    };
};

//Solution 2

// const result = []
// const fn = (x) => x * 5
// const args = [2], t = 20, cancelT = 50
// const start = performance.now()
// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr))
// }

// const cancel = cancellable(log, args, t);
// const maxT = Math.max(t, cancelT)

// setTimeout(() => {
//    cancel()
// }, cancelT)
// setTimeout(() => {
//    console.log(result) // [{"time":20,"returned":10}]
// }, maxT + 15)
