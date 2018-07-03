class LinkedListNode {
    data: number
    next: LinkedListNode | null

    constructor(data: number, next: LinkedListNode | null = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    private head: LinkedListNode | null
    private tail: LinkedListNode | null

    public constructor() {
        this.head = null
        this.tail = null
    }

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
        }

        if (this.tail) {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    public delete(item: number) {
        let currentNode = this.head

        if (this.head) {
            if (this.head.data === item) {
                this.head = this.head.next
            }
        }

        if (currentNode) {
            while (currentNode.next) {
                console.log(currentNode.next.data, 'next')
                if (currentNode.next.data === item) {
                    if (currentNode.next.next) {
                        currentNode.next = currentNode.next.next
                    }
                }
                currentNode = currentNode.next
            }
        }
    }

    public search(item: number): number | null {
        let currentNode = this.head

        if (currentNode) {
            while (currentNode.next) {
                if (currentNode.data === item) return currentNode.data
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

let lol = new LinkedList()
lol.prepend(4)
lol.prepend(3)
lol.prepend(2)
lol.prepend(1)

lol.delete(4)
console.log(lol.toArray())
