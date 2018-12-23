import { BinarySearchTreeNode } from "./BinarySearchTreeNode"

export class BinarySearchTree {
    root: BinarySearchTreeNode

    constructor() {
        this.root = new BinarySearchTreeNode(null)
    }

    insert(value: any): BinarySearchTreeNode {
        return this.root.insert(value)
    }

    contains(value: any): boolean {
        return this.root.contains(value)
    }

    toString() {
        return this.root.toString()
    }
}
