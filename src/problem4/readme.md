
# Problem 4: Three Ways to Sum to N

This solution implements three unique methods to calculate the sum of integers from 1 to `n` in TypeScript.

## Solutions

1. **Iterative Approach** (`sumToNA`):
   - Uses a loop to sum all integers from 1 to `n`.
   - Complexity: O(n) - Linear time complexity.

2. **Mathematical Formula Approach** (`sumToNB`):
   - Uses the formula for the sum of the first `n` natural numbers: `S = (n * (n + 1)) / 2`.
   - Complexity: O(1) - Constant time complexity.

3. **Recursive Approach** (`sumToNC`):
   - Recursively adds numbers from `n` to 1.
   - Complexity: O(n) - Linear time complexity due to recursive calls.

## How to Run

### Prerequisites

- Make sure you have Node.js installed.

### Steps

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the solution file using `ts-node`:
   ```bash
   npx ts-node ./sumToN.ts
   ```

3. The console will display the output of the three implemented functions.

### Example Output

For `n = 5`, the output will be:
```
15
15
15
```
