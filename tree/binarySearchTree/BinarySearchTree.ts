import { BinarySearchTreeNode } from './BinarySearchTreeNode'

export class BinarySearchTree {
    public root: BinarySearchTreeNode

    public constructor() {
        this.root = new BinarySearchTreeNode(null)
    }

    public insert(value: any): BinarySearchTreeNode {
        return this.root.insert(value)
    }

    public contains(value: any): boolean {
        return this.root.contains(value)
    }
}
