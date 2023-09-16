function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i]

        let hole = i
        while (current < arr[hole - 1] && hole > 0) {
            arr[hole] = arr[hole - 1]
            hole--
        }
        arr[hole] = current
    }

    return arr
}

console.log(insertionSort([2, 6, 7, 1, 4, 3, 6, 7, 8, 9, 99]))