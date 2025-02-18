/**
 * 暴力枚举
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let ans = 0;
    let len = arr.length;
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len;  k++) {
                const condition1 = Math.abs(arr[i] - arr[j]) <= a;
                const condition2 = Math.abs(arr[j] - arr[k]) <= b;
                const condition3 = Math.abs(arr[i] - arr[k]) <= c;
                if (condition1 & condition2 & condition3) {
                    ans++;
                }

            }
        }
    }
    return ans;
};


/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets2 = function(arr, a, b, c) {
    let ans = 0;
   const n = arr.length;
   // 它的作用是记录数组arr中每个元素出现的次数，数组索引代表元素值，索引对应的值则是该元素出现的次数。
   // 比如sum[5]表示值为 5 的元素在数组arr中出现的次数
   const sums = new Array(1001).fill(0);
   for (j = 0; j < n;  j++) {
       for (let k = j + 1; k < n; k++) {
           // 满足 (j, k) 的 条件
           if (Math.abs(arr[j] - arr[k]) <= b) {
               // 判断是否满足 (i, k)， (i, j) 的条件
               const leftJ = arr[j] - a;
               const rightJ = arr[j] + a; 
               const leftK = arr[k] - c;
               const rightK = arr[k] + c;
               // arr[i] 一定在 [Math.max(left, J), Math.min(right, K, 1000)] 的范围内
               const l = Math.max(0,leftJ, leftK);
               const r = Math.min(1000, rightJ, rightK); // 右端点最大不能超过 1000；
               // 存在[l, r] 区间 中有 arr[i] 的值
               if (l <= r) {
                   if (l == 0) {
                       ans += sums[r]
                   } else {
                       ans += (sums[r] - sums[l - 1]);
                   }
               }

           }
       }

       // 统计arr 中 每个元素的次数, 从 k = arr[j] 到 1000
       // 后续计算交集范围时，若交集范围包含大于 arr[j] 的元素，那么这些元素的计数需要考虑当前arr[j]的贡献。
       // 所以只要出现一个值为 arr[j] 的元素，就给所有大于等于 arr[j] 的元素在sum数组中的计数都增加 1 ，
       // 以确保在后续统计满足条件的三元组数量时，sum数组能准确反映元素的出现情况。
       for (let k = arr[j]; k <= 1000; k++) {
           sums[k]++;
       }

   }

   return ans;
};