import { BinarySearchTree } from "../binarySearchTree/BinarySearchTree"
import { BinarySearchTreeNode } from "../binarySearchTree/BinarySearchTreeNode"

export class AVLTree extends BinarySearchTree {
    public rotateLeftLeft(rootNode: BinarySearchTreeNode) {
        const rightNode = rootNode.right
        rootNode.setRight(null)

        if (rootNode.parent) {
            rootNode.parent.setRight(rightNode!)
        } else if (rootNode === this.root) {
            this.root = rightNode!
        }

        if (rightNode && rightNode.left) {
            rootNode.setRight(rightNode.left)
        }

        rightNode!.setLeft(rootNode)
    }

    public rotateRightRight(rootNode: BinarySearchTreeNode) {
        const leftNode = rootNode.left
        rootNode.setLeft(null)

        if (rootNode.parent) {
            rootNode.parent.setLeft(leftNode!)
        } else if (rootNode === this.root) {
            this.root = leftNode!
        }

        if (leftNode && leftNode.right) {
            rootNode.setLeft(leftNode.right)
        }

        leftNode!.setRight(rootNode)
    }
}
