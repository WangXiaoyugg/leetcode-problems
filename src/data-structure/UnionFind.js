
export default class UnionFind {
    constructor(n) {
        // 连通分量个数
        this.__count = n;
        // 存储每个节点的父节点
        this.parent = new Array(n);
        // 记录每课树的重量
        this.size = new Array(n);
        
        // 初始每个节点的父节点是自己, 它们的重量也是自己
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = i;
        }
    }

    // 把两个节点联通
    union(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);

        if(rootP == rootQ) {
            return;
        }
        
        // 平衡树，保证小的树接到大的树下面
        if (this.size[rootP] < this.size[rootQ]) {
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        } else {
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        }

        this.__count--;
    }

    // 判断两个点是否联通
    connected(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);

        return rootP == rootQ;
    }

    // 查找节点的父节点
    find(x) {
        while (x != this.parent[x]) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    // 连通分量的数量
    count() {
        return this.__count;
    }
}