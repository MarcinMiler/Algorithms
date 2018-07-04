import { LinkedList } from '../linked_list'

export class Stack {
    public linkedList: LinkedList

    public constructor() {
        this.linkedList = new LinkedList()
    }

    public isEmpty(): Boolean {
        return !this.linkedList.tail
    }

    public peek(): number | null {
        if (!this.linkedList.tail) return null

        return this.linkedList.tail.data
    }

    public push(data: number): void {
        this.linkedList.append(data)
    }

    public pop(): number | null {
        const removedTail = this.linkedList.deleteTail()

        return removedTail ? removedTail.data : null
    }

    public toArray(): Array<number> {
        return this.linkedList.toArray().reverse()
    }
}
