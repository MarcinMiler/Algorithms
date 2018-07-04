export class LinkedListNode {
    data: number
    next: LinkedListNode | null

    constructor(data: number, next: LinkedListNode | null = null) {
        this.data = data
        this.next = next
    }
}

export class LinkedList {
    public head: LinkedListNode | null
    public tail: LinkedListNode | null

    public prepend(data: number): void {
        const newNode = new LinkedListNode(data, this.head)

        this.head = newNode

        if (!this.tail) {
            this.tail = newNode
        }
    }

    public append(data: number): void {
        const newNode = new LinkedListNode(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }

        if (this.tail) {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    public delete(item: number) {
        let currentNode = this.head

        if (this.head && this.head.data === item) {
            this.head = this.head.next
        }

        if (currentNode) {
            while (currentNode.next) {
                if (currentNode.next.data === item) {
                    if (currentNode.next.next) {
                        currentNode.next = currentNode.next.next
                        return
                    } else {
                        currentNode.next = null
                        return
                    }
                }
                currentNode = currentNode.next
            }
        }
    }

    public deleteHead(): LinkedListNode | null {
        const deletedHead = this.head

        if (!this.head) {
            return null
        }

        if (this.head && this.head.next) {
            this.head = this.head.next

            return deletedHead
        } else {
            this.head = null
            this.tail = null
            return deletedHead
        }
    }

    public deleteTail(): LinkedListNode | null {
        if (this.head === this.tail) {
            const deletedTail = this.tail
            this.head = null
            this.tail = null

            return deletedTail
        }

        let currentNode = this.head
        const deletedTail = this.tail

        if (currentNode) {
            while (currentNode.next) {
                if (!currentNode.next.next) {
                    currentNode.next = null
                } else {
                    currentNode = currentNode.next
                }
            }
        }

        this.tail = currentNode
        return deletedTail
    }

    public search(item: number): LinkedListNode | null {
        let currentNode = this.head

        if (currentNode) {
            while (currentNode.next) {
                if (currentNode.data === item) return currentNode
                currentNode = currentNode.next
            }
        }
        return null
    }

    public toArray(): Array<number> {
        let currentNode = this.head
        let array: Array<number> = []

        if (currentNode) {
            while (currentNode) {
                array.push(currentNode.data)
                currentNode = currentNode.next
            }
        }

        return array
    }
}
