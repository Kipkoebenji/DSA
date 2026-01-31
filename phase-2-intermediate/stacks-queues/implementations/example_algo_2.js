/**
 * Algorithm: Queue Implementation
 *
 * Description:
 * Basic queue implementation using array
 *
 * Time Complexity: O(1) for enqueue, O(n) for dequeue (can be optimized)
 * Space Complexity: O(n)
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front()); // 1
console.log(queue.dequeue()); // 1
