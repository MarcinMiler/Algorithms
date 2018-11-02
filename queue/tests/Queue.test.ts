import { Queue } from '../'

describe('Queue', () => {
    it('should be definded', () => {
        const queue = new Queue()

        expect(queue).toBeDefined()
    })

    it('should should enqueue data to queue', () => {
        const queue = new Queue()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.toString()).toBe('1,2,3')
    })

    it('should be possible to enqueue/dequeue objects', () => {
        const queue = new Queue()

        expect(queue.isEmpty).toBeTruthy()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.toString()).toBe('1,2,3')

        queue.dequeue()

        expect(queue.toString()).toBe('2,3')

        queue.dequeue()

        expect(queue.toString()).toBe('3')
    })

    it('should should peek data from queue', () => {
        const queue = new Queue()

        expect(queue.peek()).toBeNull()

        queue.enqueue(1)

        expect(queue.peek()).toBe(1)

        queue.enqueue(2)

        expect(queue.peek()).toBe(1)

        queue.dequeue()

        expect(queue.peek()).toBe(2)
    })

    it('should should check if queue is empty', () => {
        const queue = new Queue()

        expect(queue.isEmpty()).toBeTruthy()

        queue.enqueue(1)

        expect(queue.isEmpty()).toBeFalsy()
    })

    it('should dequeue from queue in FIFO order', () => {
        const queue = new Queue()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)

        expect(queue.toString()).toBe('1,2,3,4')

        queue.dequeue()
        queue.dequeue()

        expect(queue.toString()).toBe('3,4')
    })

    it('should be possible to store objects', () => {
        interface Data {
            value: number
        }

        const queue = new Queue<Data>()

        queue.enqueue({ value: 1 })
        queue.enqueue({ value: 2 })
        queue.enqueue({ value: 3 })

        expect(queue.toString((node: Data) => node.value)).toBe('1,2,3')
    })
})
