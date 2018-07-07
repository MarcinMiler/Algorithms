export class BinaryTreeNode {
    public parent: any
    public left: any
    public right: any
    public value: any

    public constructor(value: any) {
        this.parent = null
        this.left = null
        this.right = null
        this.value = value
    }

    public setValue(value: any) {
        this.value = value
    }

    public setLeft(node: BinaryTreeNode) {
        this.left = node
        this.left.parent = this
    }

    public setRight(node: BinaryTreeNode) {
        this.right = node
        this.right.parent = this
    }
}
