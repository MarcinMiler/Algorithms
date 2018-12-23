export class BinarySearchTreeNode {
    //@ts-ignore
    parent: BinarySearchTreeNode | null
    left: BinarySearchTreeNode | null
    right: BinarySearchTreeNode | null
    value: any

    constructor(value: any = null) {
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

    setLeft(node: BinarySearchTreeNode | null) {
        if (this.left) {
            this.left.parent = null
        }

        this.left = node

        if (this.left) {
            this.left.parent = this
        }
    }

    setRight(node: BinarySearchTreeNode | null) {
        if (this.right) {
            this.right.parent = null
        }

        this.right = node

        if (this.right) {
            this.right.parent = this
        }
    }

    insert(value: any): BinarySearchTreeNode {
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

    find(value: any): BinarySearchTreeNode | null {
        if (this.value === value) return this

        if (this.value > value && this.left) {
            return this.left.find(value)
        }

        if (this.value < value && this.right) {
            return this.right.find(value)
        }

        return null
    }

    contains(value: any): boolean {
        return !!this.find(value)
    }

    traverseInOrder() {
        let traverse: number[] = []

        if (this.left) {
            traverse = traverse.concat(this.left.traverseInOrder())
        }

        traverse.push(this.value)

        if (this.right) {
            traverse = traverse.concat(this.right.traverseInOrder())
        }

        return traverse
    }

    toString() {
        return this.traverseInOrder().toString()
    }
}
