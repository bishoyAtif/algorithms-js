function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    let pivot = arr[pivotIndex], left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (i == pivotIndex) {
            continue
        }

        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2, 6, 7, 1, 4, 3]))
