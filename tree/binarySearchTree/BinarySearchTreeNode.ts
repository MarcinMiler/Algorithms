export class BinarySearchTreeNode {
    //@ts-ignore
    public parent: BinarySearchTreeNode | null
    public left: BinarySearchTreeNode | null
    public right: BinarySearchTreeNode | null
    public value: any

    public constructor(value: any = null) {
        this.value = value
        this.parent = null
        this.left = null
        this.right = null
    }

    get leftHeight(): number {
        if (!this.left) {
            return 0
        }

        return this.left.height + 1
    }

    get rightHeight(): number {
        if (!this.right) {
            return 0
        }

        return this.right.height + 1
    }

    get height() {
        return Math.max(this.leftHeight, this.rightHeight)
    }

    get balanceFactor() {
        return this.leftHeight - this.rightHeight
    }

    public setLeft(node: BinarySearchTreeNode | null) {
        if (this.left) {
            this.left.parent = null
        }

        this.left = node

        if (this.left) {
            this.left.parent = this
        }
    }

    public setRight(node: BinarySearchTreeNode | null) {
        if (this.right) {
            this.right.parent = null
        }

        this.right = node

        if (this.right) {
            this.right.parent = this
        }
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
