import { BinarySearchTree } from "../binarySearchTree/BinarySearchTree"
import { BinarySearchTreeNode } from "../binarySearchTree/BinarySearchTreeNode"

export class AVLTree extends BinarySearchTree {
    public put(value: number) {
        super.insert(value)

        let currentNode = this.root.find(value)

        while (currentNode) {
            this.balance(currentNode)
            currentNode = currentNode.parent
        }
    }

    public balance(node: BinarySearchTreeNode) {
        if (node.balanceFactor > 1) {
            if (node.left!.balanceFactor > 0) {
                this.rotateRightRight(node)
            } else if (node.left!.balanceFactor < 0) {
                this.rotateLeftRight(node)
            }
        } else if (node.balanceFactor < -1) {
            if (node.right!.balanceFactor < 0) {
                this.rotateLeftLeft(node)
            } else if (node.right!.balanceFactor > 0) {
                this.rotateRightLeft(node)
            }
        }
    }

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

    public rotateLeftRight(rootNode: BinarySearchTreeNode) {
        const leftNode = rootNode.left
        rootNode.setLeft(null)

        const leftRightNode = leftNode!.right
        leftNode!.setRight(null)

        if (leftRightNode && leftRightNode.left) {
            leftNode!.setRight(leftRightNode.left)
            leftRightNode.setLeft(null)
        }

        rootNode.setLeft(leftRightNode)

        leftRightNode!.setLeft(leftNode)

        this.rotateRightRight(rootNode)
    }

    public rotateRightLeft(rootNode: BinarySearchTreeNode) {
        const rightNode = rootNode.right
        rootNode.setRight(null)

        const rightLeftNode = rightNode!.left
        rightNode!.setLeft(null)

        if (rightLeftNode && rightLeftNode.right) {
            rightNode!.setLeft(rightLeftNode.right)
            rightLeftNode.setRight(null)
        }

        rootNode.setRight(rightLeftNode)

        rightLeftNode!.setRight(rightNode)

        this.rotateLeftLeft(rootNode)
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
