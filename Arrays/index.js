function bubbleSort(arr) {
  let swapped;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        temp = arr[j + 1];
        swapped = true;
      }
    }
    if (!swapped) break;
    return arr;
  }
}
