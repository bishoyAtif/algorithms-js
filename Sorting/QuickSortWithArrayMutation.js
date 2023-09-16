function quickSort(arr, l, r) {
    if (l >= r) {
        return arr
    }

    const newPivot = partitionArray(arr, l, r)
    quickSort(arr, l, newPivot - 1)
    quickSort(arr, newPivot, r)

    return arr
}

function partitionArray(arr, l, r) {
    let midIndex = Math.floor((l + r) / 2)
    let pivot = arr[midIndex]

    while (l <= r) {
        while (arr[l] < pivot) {
            l++
        }
        while (arr[r] > pivot) {
            r--
        }

        if (l <= r) {
            const tmp = arr[l]
            arr[l] = arr[r]
            arr[r] = tmp
            l++
            r--
        }
    }

    return l
}

const unsortedArray = [2, 16, 6, 7, 20, 11]
console.log(quickSort(unsortedArray, 0, unsortedArray.length - 1))