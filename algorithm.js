// script.js
// Initial unsorted array
const array = [12, 11, 13, 5, 6];

function performSort() {
    // Display the unsorted array
    document.getElementById('unsorted-array').textContent = `[${array.join(', ')}]`;

    // Perform insertion sort
    insertionSort(array);

    // Display the sorted array
    document.getElementById('sorted-array').textContent = `[${array.join(', ')}]`;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        // Move elements of arr[0..i-1] that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Initialize the page with unsorted array
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('unsorted-array').textContent = `[${array.join(', ')}]`;
});
