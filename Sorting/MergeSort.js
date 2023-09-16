function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const arrMid = Math.floor(arr.length / 2)
    return mergeArrays(mergeSort(arr.slice(0, arrMid)), mergeSort(arr.slice(arrMid, arr.length)))
}

function mergeArrays(arrOne, arrTwo) {
    let res = []
    while (arrOne.length && arrTwo.length) {
        if (arrOne[0] < arrTwo[0]) {
            res.push(arrOne.shift())
        } else {
            res.push(arrTwo.shift())
        }
    }

    return [...res, ...arrOne, ...arrTwo]
}

console.log(mergeSort([2, 1, 4, 6, 8, 9]))