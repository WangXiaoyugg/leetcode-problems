/**
 * @param {number[]} arr
 * @return {number}
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const n = arr.length;
    const diff =  Math.floor(n/4);
    for (let i = 0; i < n - diff; i++) {
        if (arr[i] == arr[i + diff]) {
            return arr[i];
        }
    }
    return -1;
};

// 二分查找
var findSpecialInteger2 = function(arr) {
    const n = arr.length;
    const span = Math.floor(n / 4) + 1;
    for (let i = 0; i < n; i += span) {
        const start = binarySearch(arr, arr[i]);
        const end = binarySearch(arr, arr[i]+1);
        if (end - start >= span) {
            return arr[i];
        }
    }
    return -1;

    function binarySearch(arr, target) {
        let low = 0, high = arr.length - 1;
        let res = arr.length;
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] >= target) {
                res = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return res;
    }
}