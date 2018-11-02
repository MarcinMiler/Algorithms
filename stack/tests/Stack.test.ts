import { Stack } from '../'

describe('Stack', () => {
    it('should be defined', () => {
        const stack = new Stack()

        expect(stack).toBeDefined()
    })

    it('should stack data to stack', () => {
        const stack = new Stack()

        stack.push(1)
        stack.push(2)
        stack.push(3)

        expect(stack.toString()).toBe('3,2,1')
    })

    it('should peek data from stack', () => {
        const stack = new Stack()

        stack.push(1)

        expect(stack.peek()).toBe(1)

        stack.push(2)
        stack.push(3)

        expect(stack.peek()).toBe(3)
    })

    it('should check if stack is empty', () => {
        const stack = new Stack()

        expect(stack.isEmpty()).toBeTruthy()

        stack.push(1)

        expect(stack.isEmpty()).toBeFalsy()
    })

    it('should pop data from stack', () => {
        const stack = new Stack()

        stack.push(1)
        stack.push(2)
        stack.push(3)

        expect(stack.toString()).toBe('3,2,1')

        stack.pop()

        expect(stack.toString()).toBe('2,1')
    })

    it('should be possible to push/pop objects', () => {
        interface Data {
            value: number
        }

        const stack = new Stack<Data>()

        stack.push({ value: 1 })
        stack.push({ value: 2 })
        stack.push({ value: 3 })

        expect(stack.toString((node: Data) => node.value)).toBe('3,2,1')
    })
})
