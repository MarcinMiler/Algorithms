import { LinkedListNode } from "./LinkedListNode"
import { Comparator } from "../utils/Comparator"

const compare = (a: any, b: any) => a === b

export class LinkedList<T> {
    head: LinkedListNode<T> | null
    tail: LinkedListNode<T> | null
    compare: any

    constructor(compareFunction?: any) {
        this.head = null
        this.tail = null
        this.compare = new Comparator(compareFunction)
    }

    append(data: T) {
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

    prepend(data: T) {
        const newNode = new LinkedListNode<T>(data, this.head)

        this.head = newNode

        if (!this.tail) {
            this.tail = newNode
        }
    }

    delete(item: T) {
        let currentNode = this.head
        let deletedNode: LinkedListNode<T>

        if (this.head && this.head.data === item) {
            deletedNode = this.head
            this.head = this.head.next
            return deletedNode
        }

        if (currentNode) {
            while (currentNode.next) {
                if (this.compare.equal(currentNode.next.data, item)) {
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

    deleteHead() {
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

    deleteTail() {
        let currentNode = this.head

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
    }

    find({
        value,
        callback
    }: {
        value: number | null
        callback?: (nodeData: T) => boolean
    }) {
        if (!this.head) return

        let currentNode = this.head

        while (currentNode) {
            if (callback && callback(currentNode.data)) {
                return currentNode
            }

            if (value && this.compare.equal(currentNode.data, value)) {
                return currentNode
            }

            currentNode = currentNode.next as any
        }
        return
    }

    fromArray(array: any[]) {
        array.forEach(value => this.append(value))
    }

    toArray() {
        const nodes = []

        let currentNode = this.head

        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next
        }

        return nodes
    }

    toString(callback?: (node: T) => void) {
        return this.toArray()
            .map(node => node.toString(callback))
            .toString()
    }
}
