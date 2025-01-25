import UnionFind from "../data-structure/UnionFind.js";
/**
 * 等式方程的可满足性
 */

const equationsPossible = function(equations) {
    // 26个字母
    const uf = new UnionFind(26);
    const aCode = 'a'.charCodeAt();
    
    // 先让相等的字母形成连通分量
    for (let eq of equations) {
        // eq = "a==b"
        if (eq[1] == '=') {
            let x = eq[0];
            let y = eq[3];
            // x,y 两个字母的节点连通
            uf.union(x.charCodeAt() - aCode, y.charCodeAt() - aCode);
        }
    }

    // 检查不相等关系是否打破相等关系的连通性
    for (let eq of equations) {
        // eq = 'b!=a'
        if (eq[1] == '!') {
            let x = eq[0];
            let y = eq[3];
            if (uf.connected(x.charCodeAt() - aCode, y.charCodeAt() - aCode)) {
                return false;
            }
        }
    }

    return true;

};

console.log(equationsPossible(["c==c","b==d","x!=z"]));