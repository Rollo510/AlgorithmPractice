class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


var sortList = function (head) {
    if (!head) return null;
    let nodes = sortNodes(head);
    let result;
    for (let i = 0; i < nodes.length; i++) {
        result = new Node(nodes[i], result);
    }
    return result
};

var sortNodes = (head) => {
    let arr = [];
    while (head) {
        arr.push(head.val)
        head = head.next;
    }
    return arr.sort((a, b) => b - a)
}