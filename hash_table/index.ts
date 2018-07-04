export class HashTable {
    public table: Array<any>
    private tableSize: number

    public constructor(tableSize: number) {
        this.tableSize = tableSize
        this.table = new Array(tableSize)
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

        this.table[hash] = value
    }

    public find(key: string): any {
        const hash = this.hash(key)

        return this.table[hash]
    }

    public delete(key: string): void {
        const hash = this.hash(key)

        delete this.table[hash]
    }
}
