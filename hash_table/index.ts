import { LinkedList, LinkedListNode } from '../linked_list'

interface Keys {
    key: string
}

export class HashTable {
    public table: Array<LinkedList>
    private tableSize: number
    private keys: Keys | {}

    public constructor(tableSize: number) {
        this.table = new Array(tableSize).fill(null).map(() => new LinkedList())
        this.tableSize = tableSize
        this.keys = {}
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
        this.keys[key] = hash

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
            return node.data.value
        }
    }

    public delete(key: string): LinkedListNode | null {
        const hash = this.hash(key)
        delete this.keys[key]

        const bucketLinkedList = this.table[hash]

        const node = bucketLinkedList.search({
            callback: (data: any): Boolean => data.key === key
        })

        if (node) {
            return bucketLinkedList.delete(node.data)
        }
        return null
    }

    public hasKey(key: string) {
        return this.keys.hasOwnProperty(key)
    }

    public getKeys(): Array<string> {
        return Object.keys(this.keys)
    }
}
