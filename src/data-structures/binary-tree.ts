import { TreeNode, Tree, TValueArray } from './tree';

interface IBinaryTreeNode<T> extends TreeNode<T> {
  left?: IBinaryTreeNode<T>;
  right?: IBinaryTreeNode<T>;
}

class BinaryTreeNode<T> extends TreeNode<T> implements IBinaryTreeNode<T> {
  left?: IBinaryTreeNode<T>;
  right?: IBinaryTreeNode<T>;

  addLeft(id: string, value: T) {
    this.left = new BinaryTreeNode(id, value);
  }

  addRight(id: string, value: T) {
    this.right = new BinaryTreeNode(id, value);
  }

  override toArray(): TValueArray<T> {
    const arr: TValueArray<T> = [];

    if (this.left) {
      arr.push(this.left.toArray());
    }

    arr.push([this.id, this.value]);

    if (this.right) {
      arr.push(this.right.toArray());
    }

    return arr;
  }
}

export class BinaryTree<T> extends Tree<T> {
  constructor(rootId: string, rootValue: T) {
    super(rootId, rootValue);
    this.root = new BinaryTreeNode(rootId, rootValue);
  }

  find(value: T): BinaryTreeNode<T> | undefined {
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return current;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  addLeft(nodeId: string, value: T) {
    if (!this.root) {
      throw new Error('Empty tree');
    }

    const newNode = new BinaryTreeNode(nodeId, value);
    this.root.left = newNode;
  }

  addRight(nodeId: string, value: T) {
    if (!this.root) {
      throw new Error('Empty tree');
    }

    const newNode = new BinaryTreeNode(nodeId, value);
    this.root.right = newNode;
  }
}
