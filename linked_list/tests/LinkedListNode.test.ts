import { LinkedListNode } from '../LinkedListNode'

describe('Linked List Node', () => {
    it('should be defined', () => {
        const node = new LinkedListNode(1)

        expect(node).toBeDefined()
    })

    it('should create node with value', () => {
        const node = new LinkedListNode(1)

        expect(node.data).toEqual(1)
    })

    it('should create node with object as a value', () => {
        const data = {
            id: 1,
            name: 'John'
        }

        interface Data {
            id: number
            name: string
        }

        const node2 = new LinkedListNode<Data>(data)

        expect(node2.data).toEqual(data)
    })

    it('should link nodes together', () => {
        const node1 = new LinkedListNode(1)
        const node2 = new LinkedListNode(2, node1)

        expect(node2.next).toEqual(node1)
    })
})
