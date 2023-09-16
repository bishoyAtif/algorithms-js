function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let midIndex = Math.floor(arr.length / 2)
    let pivot = arr[midIndex]
    let l = 0, r = arr.length - 1

    while (l <= r) {
        while (arr[l] < pivot) {
            l++
        }
        while (arr[r] > pivot) {
            r--
        }

        if (l < r) {
            const tmp = arr[l]
            arr[l] = arr[r]
            arr[r] = tmp
            l++
            r--
        }
    }

    console.log(arr.slice(0, l), arr[l], arr.slice(l + 1), '\n')
    return [...quickSort(arr.slice(0, l)), arr[l], ...quickSort(arr.slice(l + 1))]
}

const unsortedArray = [15, 2, -1, 16, 6, 7, 20, 1, 4, 3, 11]
console.log(quickSort(unsortedArray))
