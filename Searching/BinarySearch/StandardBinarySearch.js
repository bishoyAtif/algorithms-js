function binarySearch(nums, target) {
    let l = 0, r = nums.length

    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return -1
}

console.log(binarySearch([-1, 0, 3, 5, 5, 5, 5, 5, 5, 9, 12], 9))