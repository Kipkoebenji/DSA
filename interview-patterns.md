# Interview Patterns

Common problem-solving patterns frequently used in coding interviews.

## 1. Two Pointers

**When to use:** Array/string problems requiring comparison or searching

**Variations:**

- Opposite ends (left & right)
- Same direction (slow & fast)

**Common Problems:**

- Two Sum (sorted array)
- Container with most water
- Remove duplicates
- Palindrome checking
- 3Sum, 4Sum

**Time Complexity:** O(n)

```javascript
// Template
let left = 0,
  right = arr.length - 1;
while (left < right) {
  if (condition) {
    // process
    left++;
  } else {
    right--;
  }
}
```

---

## 2. Sliding Window

**When to use:** Subarray/substring problems with contiguous elements

**Variations:**

- Fixed size window
- Variable size window

**Common Problems:**

- Maximum sum subarray of size k
- Longest substring without repeating characters
- Minimum window substring
- Longest substring with k distinct characters

**Time Complexity:** O(n)

```javascript
// Variable size template
let left = 0, maxLen = 0;
for (let right = 0; right < arr.length; right++) {
  // Expand window
  while (/* window invalid */) {
    // Shrink window
    left++;
  }
  maxLen = Math.max(maxLen, right - left + 1);
}
```

---

## 3. Fast & Slow Pointers

**When to use:** Linked list cycle detection, finding middle element

**Common Problems:**

- Detect cycle in linked list
- Find cycle start
- Find middle of linked list
- Happy number
- Palindrome linked list

**Time Complexity:** O(n)

```javascript
let slow = head,
  fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true; // cycle detected
}
```

---

## 4. Binary Search

**When to use:** Sorted arrays, search space reduction

**Variations:**

- Standard binary search
- Binary search on answer
- Rotated array search

**Common Problems:**

- Search in sorted array
- First/last occurrence
- Search in rotated sorted array
- Find peak element
- Minimize/maximize some value

**Time Complexity:** O(log n)

```javascript
let left = 0,
  right = arr.length - 1;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
```

---

## 5. BFS (Breadth-First Search)

**When to use:** Shortest path, level-order traversal, graphs

**Common Problems:**

- Binary tree level order traversal
- Shortest path in unweighted graph
- Number of islands
- Word ladder
- Minimum depth of binary tree

**Time Complexity:** O(V + E)

```javascript
const queue = [start];
const visited = new Set([start]);

while (queue.length) {
  const node = queue.shift();
  // Process node
  for (let neighbor of getNeighbors(node)) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }
}
```

---

## 6. DFS (Depth-First Search)

**When to use:** Exploring all paths, backtracking, tree traversal

**Common Problems:**

- Tree traversals (inorder, preorder, postorder)
- Number of islands
- Path sum
- Clone graph
- Validate BST

**Time Complexity:** O(V + E)

```javascript
function dfs(node, visited = new Set()) {
  if (!node || visited.has(node)) return;
  visited.add(node);
  // Process node
  for (let neighbor of getNeighbors(node)) {
    dfs(neighbor, visited);
  }
}
```

---

## 7. Dynamic Programming

**When to use:** Optimization problems, overlapping subproblems

**Patterns:**

- Linear DP (1D)
- 2D Grid DP
- Knapsack
- LCS/LIS
- State machine

**Common Problems:**

- Fibonacci
- Climbing stairs
- Longest common subsequence
- 0/1 Knapsack
- Coin change
- Edit distance

**Time Complexity:** O(n²) typically

```javascript
// Bottom-up template
const dp = new Array(n + 1).fill(0);
dp[0] = base_case;

for (let i = 1; i <= n; i++) {
  dp[i] = // recurrence relation
}
```

---

## 8. Backtracking

**When to use:** Generate all combinations/permutations, constraint satisfaction

**Common Problems:**

- Permutations
- Combinations
- Subsets
- N-Queens
- Sudoku solver
- Word search

**Time Complexity:** O(2^n) or O(n!)

```javascript
function backtrack(path, options) {
  if (isComplete(path)) {
    result.push([...path]);
    return;
  }

  for (let option of options) {
    path.push(option);
    backtrack(path, newOptions);
    path.pop(); // backtrack
  }
}
```

---

## 9. Greedy

**When to use:** Local optimum leads to global optimum

**Common Problems:**

- Activity selection
- Jump game
- Gas station
- Meeting rooms
- Task scheduler

**Time Complexity:** O(n log n) with sorting

```javascript
// Usually involves sorting + greedy choice
arr.sort((a, b) => a - b);
for (let item of arr) {
  if (/* greedy condition */) {
    // make choice
  }
}
```

---

## 10. Monotonic Stack/Queue

**When to use:** Next greater/smaller element problems

**Common Problems:**

- Next greater element
- Daily temperatures
- Trapping rain water
- Largest rectangle in histogram

**Time Complexity:** O(n)

```javascript
const stack = [];
const result = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
  while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
    const idx = stack.pop();
    result[idx] = arr[i];
  }
  stack.push(i);
}
```

---

## 11. Topological Sort

**When to use:** DAG ordering, dependency resolution

**Common Problems:**

- Course schedule
- Task scheduling
- Alien dictionary

**Time Complexity:** O(V + E)

```javascript
// Kahn's algorithm (BFS-based)
const inDegree = new Map();
const queue = [];

// Add nodes with 0 in-degree
for (let [node, degree] of inDegree) {
  if (degree === 0) queue.push(node);
}

const result = [];
while (queue.length) {
  const node = queue.shift();
  result.push(node);
  // Decrease in-degree of neighbors
}
```

---

## 12. Union-Find (Disjoint Set)

**When to use:** Connected components, cycle detection

**Common Problems:**

- Number of connected components
- Redundant connection
- Accounts merge

**Time Complexity:** O(α(n)) ≈ O(1) with path compression

```javascript
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const px = this.find(x),
      py = this.find(y);
    if (px === py) return false;

    // Union by rank
    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px;
    } else {
      this.parent[py] = px;
      this.rank[px]++;
    }
    return true;
  }
}
```

---

## Pattern Selection Guide

| Problem Type               | Suggested Pattern          |
| -------------------------- | -------------------------- |
| Subarray/substring         | Sliding Window, Prefix Sum |
| Sorted array search        | Binary Search              |
| Linked list                | Two Pointers (Fast & Slow) |
| Tree traversal             | BFS, DFS                   |
| Shortest path              | BFS, Dijkstra              |
| Optimization with choices  | Dynamic Programming        |
| Generate all possibilities | Backtracking               |
| Next greater/smaller       | Monotonic Stack            |
| Connected components       | Union-Find, DFS            |
| Dependency ordering        | Topological Sort           |
| Local optimal = global     | Greedy                     |

---

**Tip:** Recognize patterns through practice. Most problems are variations of these core patterns!
