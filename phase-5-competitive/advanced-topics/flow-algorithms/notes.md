# Flow Algorithms

## Key Concepts

- Network flow problems
- Source and sink nodes
- Edge capacities
- Flow conservation

## Maximum Flow Problem

- Find maximum flow from source to sink
- Respect edge capacities
- Flow conservation at intermediate nodes

## Algorithms

### Ford-Fulkerson

- Augmenting path method
- Time: O(E \* max_flow)
- Uses DFS to find paths

### Edmonds-Karp

- BFS-based Ford-Fulkerson
- Time: O(V \* E²)
- Polynomial time guarantee

### Dinic's Algorithm

- Level graph + blocking flow
- Time: O(V² \* E)
- Faster in practice

### Push-Relabel

- Time: O(V² \* E) or O(V³)
- Different paradigm

## Min-Cut Max-Flow Theorem

- Maximum flow = Minimum cut capacity

## Applications

- Network routing
- Bipartite matching
- Image segmentation
- Airline scheduling

## Notes
