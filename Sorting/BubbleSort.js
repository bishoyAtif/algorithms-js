function bubbleSort(arr) {
    let sorted

    do {
        sorted = true
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
                sorted = false
            }
        }
    } while (!sorted)

    return arr
}

console.log(bubbleSort([2, 6, 7, 1, 4, 3]))