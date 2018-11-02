import { LinkedList } from '../linked_list/LinkedList'

export class Queue<T> {
    linkedList: LinkedList<T>

    constructor() {
        this.linkedList = new LinkedList<T>()
    }

    isEmpty() {
        return !this.linkedList.head
    }

    peek() {
        if (!this.linkedList.head) return null

        return this.linkedList.head.data
    }

    enqueue(data: T) {
        this.linkedList.append(data)
    }

    dequeue() {
        const removeHead = this.linkedList.deleteHead()

        return removeHead ? removeHead.data : null
    }

    toString(callback?: (node: T) => void) {
        return this.linkedList.toString(callback)
    }
}
