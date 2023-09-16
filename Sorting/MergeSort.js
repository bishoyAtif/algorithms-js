function mergeSort(arr) {
    if (arr.length == 1) {
        return arr
    }

    const arrMid = Math.floor(arr.length / 2)
    return mergeArrays(mergeSort(arr.slice(0, arrMid)), mergeSort(arr.slice(arrMid, arr.length)))
}

function mergeArrays(arrOne, arrTwo) {
    let res = [], arrOnePtr = 0, arrTwoPtr = 0
    while (arrOnePtr < arrOne.length || arrTwoPtr < arrTwo.length) {
        if (arrOnePtr < arrOne.length && arrTwoPtr < arrTwo.length) {
            if (arrOne[arrOnePtr] < arrTwo[arrTwoPtr]) {
                res.push(arrOne[arrOnePtr])
                arrOnePtr++
                continue
            } else {
                res.push(arrTwo[arrTwoPtr])
                arrTwoPtr++
                continue
            }
        }

        if (arrOnePtr < arrOne.length) {
            res.push(arrOne[arrOnePtr])
            arrOnePtr++
            continue
        }

        if (arrTwoPtr < arrTwo.length) {
            res.push(arrTwo[arrTwoPtr])
            arrTwoPtr++
            continue
        }
    }

    return res
}

console.log(mergeSort([2, 1, 4, 6, 8, 9]))