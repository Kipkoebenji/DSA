/**
 * Algorithm: THIS IS BUBBLE SORT 
 *
 * Description:
 * Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.


 *
 * Time Complexity:

  Worst: O(n²)

  Best (already sorted): O(n)

* Space Complexity: O(1) (in-place sort)
 */

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5];
console.log(bubbleSort(arr));
