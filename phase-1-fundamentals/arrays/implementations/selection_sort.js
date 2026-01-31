/**
 * Algorithm: selection Sort
 *
 * Description:
 * [Brief description of what this algorithm does]
 *
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

//THIS IS SELECTION SORT


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
