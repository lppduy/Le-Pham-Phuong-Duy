
// Solution for Problem 4: Three ways to sum to n

/**
 * Iterative approach using a loop.
 * Complexity: O(n) - Linear time complexity.
 */
function sumToNA(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Mathematical formula approach.
 * Complexity: O(1) - Constant time complexity.
 */
function sumToNB(n: number): number {
    return (n * (n + 1)) / 2;
}

/**
 * Recursive approach.
 * Complexity: O(n) - Linear time complexity due to n recursive calls.
 */
function sumToNC(n: number): number {
    if (n === 0) return 0;
    return n + sumToNC(n - 1);
}

// Example usage:
console.log(sumToNA(5)); // Output: 15
console.log(sumToNB(5)); // Output: 15
console.log(sumToNC(5)); // Output: 15
