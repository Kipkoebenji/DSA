# Divide and Conquer

## Key Concepts

- Break problem into smaller subproblems
- Solve subproblems recursively
- Combine solutions

## Steps

1. **Divide**: Break into smaller subproblems
2. **Conquer**: Solve subproblems recursively
3. **Combine**: Merge solutions

## Classic Algorithms

- Merge Sort
- Quick Sort
- Binary Search
- Strassen's Matrix Multiplication
- Karatsuba Algorithm (fast multiplication)
- Closest Pair of Points

## Time Complexity

- Often O(n log n)
- Analyzed using Master Theorem

## Master Theorem

For recurrence T(n) = aT(n/b) + f(n):

- If f(n) = O(n^c) where c < log_b(a): T(n) = Θ(n^log_b(a))
- If f(n) = Θ(n^c) where c = log_b(a): T(n) = Θ(n^c log n)
- If f(n) = Ω(n^c) where c > log_b(a): T(n) = Θ(f(n))

## Notes
