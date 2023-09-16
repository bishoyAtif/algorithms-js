function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        const tmp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = tmp
    }

    return arr
}

console.log(selectionSort([2, 6, 7, 1, 4, 3]))