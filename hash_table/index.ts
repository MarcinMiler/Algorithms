import { LinkedList, LinkedListNode } from '../linked_list'

export class HashTable {
    public table: Array<LinkedList>
    private tableSize: number

    public constructor(tableSize: number) {
        this.tableSize = tableSize
        this.table = new Array(tableSize).fill(null).map(() => new LinkedList())
    }

    private hash(key: string): number {
        const hash = Array.from(key).reduce(
            (prev, curr) => prev + curr.charCodeAt(0),
            0
        )

        return hash % this.tableSize
    }

    public put(key: string, value: any): void {
        const hash = this.hash(key)

        const bucketLinkedList = this.table[hash]

        const node = bucketLinkedList.search({
            callback: (data: any): Boolean => data.key === key
        })

        if (!node) {
            bucketLinkedList.append({ key, value })
        } else {
            console.log('Colision')
        }
    }

    public get(key: string): any {
        const hash = this.hash(key)

        const bucketLinkedList = this.table[hash]

        const node = bucketLinkedList.search({
            callback: (data: any): Boolean => data.key === key
        })

        if (node) {
            return node.data
        }
    }

    public delete(key: string): LinkedListNode | null {
        const hash = this.hash(key)

        const bucketLinkedList = this.table[hash]

        const node = bucketLinkedList.search({
            callback: (data: any): Boolean => data.key === key
        })

        if (node) {
            return bucketLinkedList.delete(node.data)
        }
        return null
    }
}
