/**
 * Algorithm: Selection Sort
 *
 * Description:
 * The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array. It then repeats this process for the remaining unsorted portion of the array until the entire array is sorted.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1) (in-place sort) 
 */

function selectionSort(arr){
  let n = arr.length
  for(let i = 0; i < n - 1; i++){
    let minIndex = i
    for(let j = i + 1; j < n; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}


const arr = [64, 34, 25, 12, 22, 11, 90, 5];
console.log(selectionSort(arr));