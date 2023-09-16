function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }

    return -1
}

console.log(linearSearch([-1, 0, 3, 5, 5, 5, 5, 5, 5, 9, 12], 5))
