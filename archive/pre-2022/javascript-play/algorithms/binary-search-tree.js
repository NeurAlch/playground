test("Implement a Binary Tree", function() {

    'use strict';

    var BinarySearchTree = function(data) {

        var self = this;
        self.root = null;

        function searchIterative(d, current) {
            if (d == null) return null;
            while (current != null && current.data !== d) {
                if (d < current.data) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
            return current;
        }

        function searchRecursive(d, node) {
            if (d == null || node == null) return null;
            if (node.data === d) return node;
            if (d < node.data) {
                return searchRecursive(d, node.left);
            }
            else {
                return searchRecursive(d, node.right);
            }
        }

        function internalInOrder(node) {
            if (node !== null) {
                internalInOrder(node.left);
                console.log(node.data);
                internalInOrder(node.right);
            }
        }

        function internalPreOrder(node) {
            if (node !== null) {
                console.log(node.data);
                internalPreOrder(node.left);
                internalPreOrder(node.right);
            }
        }

        function internalPostOrder(node) {
            if (node !== null) {
                internalPostOrder(node.left);
                internalPostOrder(node.right);
                console.log(node.data);
            }
        }

        function internalMin(node) {
            while (node.left !== null) {
                node = node.left;
            }
            return node;
        }

        function internalRemove(node, d) {

            if (node === null) {
                return null;
            }

            if (d < node.data) {
                node.left = internalRemove(node.left, d);
            }
            else if (d > node.data) {
                node.right = internalRemove(node.right, d);
            }
            else if (node.left !== null && node.right !== null) {
                node.data = internalMin(node.right).data;
                node.right = internalRemove(node.data, node.right);
            }
            else {
                node = node.left !== null ? node.left : node.right;
            }

            return node;

        }

        function internalSize(node) {

            if (node === null) {
                return 0;
            }
            return internalSize(node.left) + 1 + internalSize(node.right);

        }

        self.insert = function(d) {

            var n = new Node(d);

            if (self.root === null) {
                self.root = n;
                return;
            }

            var parent, current = self.root;

            while (true) {
                parent = current;
                if (d < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        return;
                    }
                }
                else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        return
                    }
                }
            }

        };

        self.iterativeSearch = function(d) {
            return searchIterative(d, self.root);
        };

        self.recursiveSearch = function(d) {
            return searchRecursive(d, self.root);
        };

        self.min = function() {
            return internalMin(self.root);
        };

        self.max = function() {
            var node = self.root;
            while (node.right !== null) {
                node = node.right;
            }
            return node;
        };

        self.inOrder = function(d) {
            var start = searchIterative(d || self.root.data, self.root);
            return internalInOrder(start);
        };

        self.preOrder = function(d) {
            var start = searchIterative(d || self.root.data, self.root);
            return internalPreOrder(start);
        };

        self.postOrder = function(d) {
            var start = searchIterative(d || self.root.data, self.root);
            return internalPostOrder(start);
        };

        self.remove = function(d) {
            self.root = internalRemove(self.root, d);
        };

        self.size = function() {
            return internalSize(self.root);
        };

        self.insert(data);

    };

    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    };

    var bst_1 = new BinarySearchTree(23);
    bst_1.insert(45);
    bst_1.insert(16);
    bst_1.insert(37);
    bst_1.insert(3);
    bst_1.insert(99);
    bst_1.insert(22);

    console.log('inOrder');
    bst_1.inOrder();
    console.log('preOrder');
    bst_1.preOrder();
    console.log('postOrder');
    bst_1.postOrder();

    strictEqual(bst_1.min().data, 3);
    strictEqual(bst_1.max().data, 99);
    strictEqual(bst_1.iterativeSearch(3).data, 3);
    strictEqual(bst_1.recursiveSearch(3).data, 3);
    strictEqual(bst_1.iterativeSearch(100), null);
    strictEqual(bst_1.recursiveSearch(100), null);

    var bst_2 = new BinarySearchTree(50);
    bst_2.insert(40);
    bst_2.insert(24);
    bst_2.insert(45);

    strictEqual(bst_2.max().data, 50);
    strictEqual(bst_2.iterativeSearch(50).data, 50);
    strictEqual(bst_2.recursiveSearch(50).data, 50);
    strictEqual(bst_2.iterativeSearch(100), null);
    strictEqual(bst_2.recursiveSearch(100), null);

    var bst_3 = new BinarySearchTree(12);
    bst_3.insert(15);
    bst_3.insert(14);
    bst_3.insert(16);
    bst_3.insert(13);

    strictEqual(bst_3.min().data, 12);
    strictEqual(bst_3.iterativeSearch(15).data, 15);
    strictEqual(bst_3.recursiveSearch(15).data, 15);

    strictEqual(bst_3.size(), 5);
    bst_3.remove(14);

    strictEqual(bst_3.iterativeSearch(14), null);

    strictEqual(bst_3.size(), 4);
    bst_3.remove(12);

    strictEqual(bst_3.iterativeSearch(12), null);

    strictEqual(bst_3.size(), 3);
    bst_3.remove(13);

    strictEqual(bst_3.iterativeSearch(13), null);

    strictEqual(bst_3.size(), 2);
    bst_3.remove(16);

    strictEqual(bst_3.iterativeSearch(16), null);

    strictEqual(bst_3.size(), 1);
    bst_3.remove(15);

    strictEqual(bst_3.iterativeSearch(15), null);
    strictEqual(bst_3.size(), 0);

    var bst_4 = new BinarySearchTree(15);
    bst_4.insert(20);
    bst_4.insert(18);
    bst_4.insert(20);
    bst_4.insert(16);

    strictEqual(bst_4.iterativeSearch(15).data, 15);
    strictEqual(bst_4.recursiveSearch(15).data, 15);
    strictEqual(bst_4.iterativeSearch(null), null);
    strictEqual(bst_4.recursiveSearch(null), null);

});