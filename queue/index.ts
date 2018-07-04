import { LinkedList } from '../linked_list'

export class Queue {
    public linkedList: LinkedList

    public constructor() {
        this.linkedList = new LinkedList()
    }

    public isEmpty(): Boolean {
        return !this.linkedList.head
    }

    public peek(): number | null {
        if (!this.linkedList.head) return null

        return this.linkedList.head.data
    }

    public enqueue(data: number): void {
        this.linkedList.append(data)
    }

    public dequeue(): number | null {
        const removeHead = this.linkedList.deleteHead()

        return removeHead ? removeHead.data : null
    }
}
