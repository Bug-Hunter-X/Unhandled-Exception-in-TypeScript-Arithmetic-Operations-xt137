# Unhandled Exception in TypeScript Arithmetic Operations

This repository demonstrates a common error in TypeScript: failing to handle exceptions properly. The `divide` function throws an error if the divisor is zero, but the calling code doesn't handle this error, resulting in a program crash.

## Bug

The `bug.ts` file contains a function `divide` that throws an error if the divisor is zero. The main part of the code calls this function with a zero divisor, leading to an unhandled exception.

## Solution

The `bugSolution.ts` file shows how to fix this using a `try...catch` block to handle the potential `Error` and gracefully exit or provide a more informative error message.