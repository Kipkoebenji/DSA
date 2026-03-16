/**
 * Algorithm: THIS IS Merge Sort
 *
 * Description:
 * Divide: Divide the list or array recursively into two halves until it can no more be divided.
 * Conquer: Each subarray is sorted individually using the merge sort algorithm.
 * Merge: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.
 * 
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

function mergeSort(arr) {

    // Base case: If the array has 0 or 1 element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
