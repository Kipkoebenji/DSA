# Tries (Prefix Trees)

## Key Concepts

- Tree structure for string storage
- Each node represents a character
- Root is empty
- Paths from root represent strings

## Operations

- Insert: O(m) where m is string length
- Search: O(m)
- Delete: O(m)
- Prefix search: O(m)

## Node Structure

```javascript
class TrieNode {
  constructor() {
    this.children = {}; // or new Map()
    this.isEndOfWord = false;
  }
}
```

## Common Applications

- Autocomplete
- Spell checker
- IP routing (longest prefix match)
- Dictionary implementation
- Pattern matching

## Advantages

- Fast prefix searches
- Memory efficient for common prefixes

## Notes
