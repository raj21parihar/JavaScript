// 2621. Sleep

/* 
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 */

// Solution

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}
