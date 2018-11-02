import { LinkedList } from '../linked_list/LinkedList'

export class Stack<T> {
    linkedList: LinkedList<T>

    constructor() {
        this.linkedList = new LinkedList<T>()
    }

    isEmpty() {
        return !this.linkedList.tail
    }

    peek() {
        if (!this.linkedList.head) return null

        return this.linkedList.head.data
    }

    push(data: T) {
        this.linkedList.prepend(data)
    }

    pop() {
        this.linkedList.deleteHead()
    }

    toString(callback?: (data: T) => void) {
        return this.linkedList.toString(callback)
    }
}
