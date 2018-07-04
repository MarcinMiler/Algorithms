export class LinkedListNode {
    data: any
    next: LinkedListNode | null

    constructor(data: any, next: LinkedListNode | null = null) {
        this.data = data
        this.next = next
    }
}

export class LinkedList {
    public head: LinkedListNode | null
    public tail: LinkedListNode | null

    public prepend(data: any): void {
        const newNode = new LinkedListNode(data, this.head)

        this.head = newNode

        if (!this.tail) {
            this.tail = newNode
        }
    }

    public append(data: any): void {
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

    public delete(item: any): LinkedListNode | null {
        let currentNode = this.head
        let deletedNode: LinkedListNode

        if (this.head && this.head.data === item) {
            deletedNode = this.head
            this.head = this.head.next
            return deletedNode
        }

        if (currentNode) {
            while (currentNode.next) {
                console.log(currentNode.next.data)
                if (currentNode.next.data === item) {
                    if (currentNode.next.next) {
                        deletedNode = currentNode.next
                        currentNode.next = currentNode.next.next
                        return deletedNode
                    } else {
                        currentNode.next = null
                        return null
                    }
                }
                currentNode = currentNode.next
            }
        }

        return null
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

    public search({
        item,
        callback
    }: {
        item?: any
        callback?: (data: any) => Boolean
    }): LinkedListNode | null {
        let currentNode = this.head

        if (currentNode) {
            while (currentNode.next) {
                if (currentNode && callback && callback(currentNode.data)) {
                    return currentNode
                }

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
