/**
 * Algorithm: This is Deletion
 *
 * Description:
 * Given the array Given {10, 20, 30, 40, 50}, trace through the deletion algorithm to remove the element at K = 4.
 *
 * Time Complexity: O(n)
 * Space Complexity: 0(1)
 */

function deletion(arr, position) {
    let n = arr.length;
    let k = position;x

    console.log("Before:", arr);

    let j = k;

    while (j < n - 1) {
        arr[j] = arr[j + 1];
        j++;
    }

    arr.length = n - 1;

    console.log("After:", arr);
}

deletion([10, 20, 30, 40, 50], 4);