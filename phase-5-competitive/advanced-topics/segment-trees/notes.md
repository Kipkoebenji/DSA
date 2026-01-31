# Segment Trees

## Key Concepts

- Binary tree for range queries
- Each node stores aggregate info for a range
- Leaves represent individual elements

## Operations

- Build: O(n)
- Query (range): O(log n)
- Update (point): O(log n)
- Update (range): O(log n) with lazy propagation

## Use Cases

- Range sum/min/max queries
- Range updates
- When multiple queries on static/dynamic array

## Structure

```javascript
// Array-based: node i has children at 2i+1 and 2i+2
// Tree size: ~4n for array of size n
```

## Lazy Propagation

- Delay updates until necessary
- Efficient range updates

## Alternatives

- Fenwick Tree (Binary Indexed Tree) - simpler, less general
- Sparse Table - for static arrays, RMQ

## Notes
