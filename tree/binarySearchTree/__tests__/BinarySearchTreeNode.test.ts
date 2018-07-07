import { BinarySearchTreeNode } from '../BinarySearchTreeNode'

describe('Binary search tree node', () => {
    it('should create binary tree node', () => {
        const tree = new BinarySearchTreeNode(null)

        expect(tree).toBeDefined()
        expect(tree).toMatchObject({
            value: null,
            parent: null,
            left: null,
            right: null
        })
    })

    it('sholud insert new items', () => {
        const tree = new BinarySearchTreeNode(null)

        tree.insert(5)
        tree.insert(3)
        tree.insert(4)

        expect(tree.contains(5)).toBeTruthy()
        expect(tree.contains(4)).toBeTruthy()
        expect(tree.contains(3)).toBeTruthy()
        expect(tree.contains(10)).toBeFalsy()
    })

    it('should write correct left and right node', () => {
        const tree = new BinarySearchTreeNode(null)

        tree.insert(5)
        tree.insert(3)
        tree.insert(4)

        expect(tree).toMatchObject({ left: { value: 3, right: { value: 4 } } })
    })
})
