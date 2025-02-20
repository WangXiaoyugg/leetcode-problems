/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 迭代版本
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];
    if (root == null) return res;

    const stack = [root];

    while(stack.length > 0) {
        let currNode = stack.pop();
        res.push(currNode.val);
        let children = currNode.children;
        for (let i = children.length - 1; i >= 0; i--) {
            stack.push(children[i]);
        }
    }
    return res;
};



/**
 * 递归版本
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder2 = function(root) {
    const res = [];
    function _preorder2(root) {
        if (root == null) {
            return;
        }
        res.push(root.val);
        root.children.forEach(child => {
            _preorder2(child);
        })
    }

    _preorder2(root);

    return res;

    
};