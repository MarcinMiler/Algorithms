export class LinkedListNode<T> {
    data: T
    next: LinkedListNode<T> | null

    constructor(data: T, next: LinkedListNode<T> | null = null) {
        this.data = data
        this.next = next
    }
}
