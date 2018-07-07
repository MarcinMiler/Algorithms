import { BinarySearchTree } from '../BinarySearchTree'

describe('Binary search tree', () => {
    it('should create binary search tree', () => {
        const tree = new BinarySearchTree()

        expect(tree).toBeDefined()
        expect(tree).toMatchObject({
            root: {
                value: null,
                parent: null,
                left: null,
                right: null
            }
        })
    })

    it('should insert new items', () => {
        const tree = new BinarySearchTree()

        tree.insert(10)
        tree.insert(5)
        tree.insert(3)

        expect(tree.contains(10)).toBeTruthy()
        expect(tree.contains(5)).toBeTruthy()
        expect(tree.contains(3)).toBeTruthy()
        expect(tree.contains(100)).toBeFalsy()
    })

    it('should correct write left and right node', () => {
        const tree = new BinarySearchTree()

        tree.insert(10)
        tree.insert(5)
        tree.insert(7)

        expect(tree).toMatchObject({
            root: {
                value: 10,
                left: { value: 5, right: { value: 7 } }
            }
        })
    })
})
