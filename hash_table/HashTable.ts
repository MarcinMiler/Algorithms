import { LinkedList } from '../linked_list/LinkedList'

interface TableData<T> {
    key: string
    data: T
}

interface Keys {
    key: string
}

export class HashTable<T> {
    table: LinkedList<TableData<T>>[]
    tableSize: number
    keys: Keys | {}

    constructor(tableSize: number) {
        this.table = new Array(tableSize)
            .fill(null)
            .map(() => new LinkedList<TableData<T>>())
        this.tableSize = tableSize
        this.keys = {}
    }

    hash(key: string) {
        const hash = Array.from(key).reduce(
            (prev, curr) => prev + curr.charCodeAt(0),
            0
        )

        return hash % this.tableSize
    }

    put(key: string, data: T) {
        const hash = this.hash(key)
        this.keys[key] = hash

        const bucket = this.table[hash]

        const node = bucket.find({
            value: null,
            callback: node => node.key === key
        })

        if (!node) {
            bucket.append({ key, data })
        } else {
            console.log('collisisno')
        }
    }

    get(key: string) {
        const bucket = this.table[this.hash(key)]

        const node = bucket.find({
            value: null,
            callback: node => node.key === key
        })

        return node ? node.data.data : null
    }

    delete(key: string) {
        const bucket = this.table[this.hash(key)]

        const node = bucket.find({
            value: null,
            callback: node => node.key === key
        })

        if (node) {
            bucket.delete(node.data)
        }
    }
}
