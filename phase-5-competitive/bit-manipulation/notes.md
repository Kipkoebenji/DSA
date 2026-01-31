# Bit Manipulation

## Key Concepts

- Binary representation
- Bitwise operators: &, |, ^, ~, <<, >>
- Two's complement

## Common Operations

### Check if number is power of 2

```javascript
(n & (n - 1)) === 0;
```

### Get/Set/Clear/Toggle bit

```javascript
// Get i-th bit: (n >> i) & 1
// Set i-th bit: n | (1 << i)
// Clear i-th bit: n & ~(1 << i)
// Toggle i-th bit: n ^ (1 << i)
```

### Count set bits (Brian Kernighan's)

```javascript
while (n) {
  count++;
  n &= n - 1;
}
```

## Common Patterns

- XOR properties (a ^ a = 0, a ^ 0 = a)
- Finding unique element
- Subset generation using bitmask
- Checking even/odd: n & 1

## Applications

- Optimization (space/time)
- Cryptography
- Graphics
- Network protocols

## Notes
