/** Heap Sort Algorithm -  */

/**
 * Time complexity - O(n Log n)
 */

/**
 * @param {Array} arr
 */
function ascendingHeapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, n)
    }

    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        maxHeapify(arr, 0, i);
    }

}

/**
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} n
 */
function maxHeapify(arr, i, n) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        maxHeapify(arr, largest, n);
    }
}
let ar = [3, 6, 1, 4, 9, 2, 6];
ascendingHeapSort(ar);
console.log('sorted:::', ar)


/**
 * 
 * @param {Array} arr 
 */
function descendingHeapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        minHeapify(arr, i, n);
    }

    for(let i = n-1;i>0;i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        minHeapify(arr,0,i);
    }

}

function minHeapify(arr, i, n) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) smallest = left;
    if (right < n && arr[right] < arr[smallest]) smallest = right;

    if(smallest != i){
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;

        minHeapify(arr,smallest,n);
    }
}

descendingHeapSort(ar);
console.log('ar::',ar);

