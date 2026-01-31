# Heaps

## Key Concepts

- Complete binary tree
- Max Heap (parent ≥ children)
- Min Heap (parent ≤ children)
- Priority Queue

## Operations

- Insert: O(log n)
- Extract Max/Min: O(log n)
- Peek: O(1)
- Heapify: O(n)

## Common Patterns

- K largest/smallest elements
- Median of stream
- Merge K sorted lists
- Task scheduling

## Heap Implementation

- Array representation
- Parent at index i: children at 2i+1 and 2i+2
- Child at index i: parent at floor((i-1)/2)

## Applications

- Priority queue
- Heap sort
- Dijkstra's algorithm
- Huffman coding

## Notes
