//THIS IS BUBBLE SORT 

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

let array = [12,7,8,5,1,17]
console.log("array before sorting: ", array);
const sortedArray = bubbleSort(array);
console.log("array after sorting: ", sortedArray);

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


console.log("array before sorting: ", array);

console.log("array after sorting: ", selectionSort(array));

//Insertion Sort

function insertionSort(arr){
  let n = arr.length
  for(let i = 1; i < n; i++){
    let current = arr[i]
    let j = i -1

    while(j >=0 && arr[j] > current){
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
}

console.log("array before sorting: ", array);

console.log("array after sorting: ", insertionSort(array));