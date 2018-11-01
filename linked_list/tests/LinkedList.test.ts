import { LinkedList } from '../LinkedList'

describe('Linked List', () => {
    it('should be defined', () => {
        const list = new LinkedList()

        expect(list).toBeDefined()
    })

    it('should append node to linked list', () => {
        const list = new LinkedList()
        expect(list.head).toBeNull()
        expect(list.tail).toBeNull()

        list.append(1)
        list.append(2)

        expect(list.head).toMatchObject({ data: 1 })
        expect(list.tail).toMatchObject({ data: 2 })
        expect(list.toString()).toBe('1,2')
    })

    it('should prepend node to linked list', () => {
        const list = new LinkedList()

        list.prepend(1)

        expect(list.toString()).toBe('1')
        expect(list.head).toMatchObject({ data: 1 })
        expect(list.tail).toMatchObject({ data: 1 })

        list.prepend(2)

        expect(list.toString()).toBe('2,1')
        expect(list.head).toMatchObject({ data: 2 })
        expect(list.tail).toMatchObject({ data: 1 })

        list.append(3)

        expect(list.toString()).toBe('2,1,3')
        expect(list.head).toMatchObject({ data: 2 })
        expect(list.tail).toMatchObject({ data: 3 })
    })

    it('should delete node by value from linked list', () => {
        const list = new LinkedList()

        list.append(1)
        list.append(2)
        list.append(3)

        list.delete(2)

        expect(list.toString()).toBe('1,3')
        expect(list.head).toMatchObject({ data: 1 })
        expect(list.tail).toMatchObject({ data: 3 })

        list.delete(1)

        expect(list.toString()).toBe('3')
        expect(list.head).toMatchObject({ data: 3 })
        expect(list.tail).toMatchObject({ data: 3 })
    })

    it('should delete linked list tail', () => {
        const list = new LinkedList()

        list.append(1)
        list.append(2)
        list.append(3)

        list.deleteTail()

        expect(list.tail).toMatchObject({ data: 2 })
        expect(list.toString()).toBe('1,2')
    })

    it('should delete linked list head', () => {
        const list = new LinkedList()

        list.append(4)
        list.append(5)
        list.append(6)

        list.deleteHead()

        expect(list.toString()).toBe('5,6')
        expect(list.head).toMatchObject({ data: 5 })
    })

    it('should be possible to store objects in the list and to print them out', () => {
        interface Data {
            value: number
        }

        const list = new LinkedList<Data>()

        list.append({ value: 1 })
        list.append({ value: 2 })
        list.append({ value: 3 })

        expect(list.toString((node: Data) => node.value)).toBe('1,2,3')
        expect(list.head).toMatchObject({ data: { value: 1 } })
    })

    it('should find node by value', () => {
        const list = new LinkedList()

        list.append(1)
        list.append(2)
        list.append(3)

        expect(list.find({ value: 2 })).toMatchObject({ data: 2 })
    })

    it('should find node by callback', () => {
        interface Data {
            value: number
        }

        const list = new LinkedList<Data>()

        list.append({ value: 1 })
        list.append({ value: 2 })
        list.append({ value: 3 })

        function callback(nodeData: Data) {
            return nodeData.value === 2
        }

        expect(list.find({ value: null, callback })).toMatchObject({
            data: { value: 2 }
        })
    })

    it('should create linked list from array', () => {
        const list = new LinkedList()

        list.fromArray([1, 2, 3, 4, 5])

        expect(list.toString()).toBe('1,2,3,4,5')
    })
})
