/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // 题目要求 O(log(n)) 必然是 二分查找
    // 在 [left, right] 区域中查找 arr[mid] > arr[mid-1], arr[mid] > arr[mid+1];
    let left = 1; // 
    let right = arr.length - 2;
    let ans = 0;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid + 1]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
    
};