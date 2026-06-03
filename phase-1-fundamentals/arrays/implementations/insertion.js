/**
 * Algorithm: This is Insertion
 *
 * Description:
 * Given the array {2, 4, 6, 8, 10}, write the algorithm steps to insert the value 5 at position K = 2.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function insertion(arr, value, position) {
    let n = arr.length;
    let item = value;
    let k = position;

    console.log("Before:", arr);

    let j = n;

    while (j > k) {
        arr[j] = arr[j - 1];
        j--;
    }

    arr[k] = item;

    console.log("After:", arr);
}

insertion([2, 4, 6, 8, 10], 5, 2);