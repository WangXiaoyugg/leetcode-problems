/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    // 转置后的矩阵
    let res = new Array(n).fill(0).map(() => new Array(m));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[j][i] =  matrix[i][j]
        }
    }

    return res;
}