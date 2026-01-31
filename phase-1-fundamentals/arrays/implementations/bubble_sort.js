/**
 * Algorithm: THIS IS BUBBLE SORT 
 *
 * Description:
 * [Brief description of what this algorithm does]
 *
 * Time Complexity: O(?)
 * Space Complexity: O(?)
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


