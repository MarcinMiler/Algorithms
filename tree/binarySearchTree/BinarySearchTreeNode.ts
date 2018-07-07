import { BinaryTreeNode } from '../BinaryTreeNode'

export class BinarySearchTreeNode extends BinaryTreeNode {
    public constructor(value: any = null) {
        super(value)
    }

    public insert(value: any): BinarySearchTreeNode {
        if (this.value === null) {
            this.value = value
        }

        if (this.value > value) {
            if (this.left) {
                return this.left.insert(value)
            }

            const newNode = new BinarySearchTreeNode(value)
            this.setLeft(newNode)

            return newNode
        }

        if (this.value < value) {
            if (this.right) {
                return this.right.insert(value)
            }

            const newNode = new BinarySearchTreeNode(value)
            this.setRight(newNode)

            return newNode
        }

        return this
    }

    public find(value: any): BinarySearchTreeNode | null {
        if (this.value === value) return this

        if (this.value > value && this.left) {
            return this.left.find(value)
        }

        if (this.value < value && this.right) {
            return this.right.find(value)
        }

        return null
    }

    public contains(value: any): boolean {
        return !!this.find(value)
    }
}
