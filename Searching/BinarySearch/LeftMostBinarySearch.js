function leftMostBinarySearch(nums, target) {
    let l = 0, r = nums.length, res = -1

    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] == target) {
            res = mid
            r = mid - 1
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return res
}

console.log(leftMostBinarySearch([-1, 0, 3, 5, 5, 5, 5, 5, 5, 9, 12], 5))