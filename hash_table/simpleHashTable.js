
export default class HashTable {
    constructor(tableSize) {
        this.tableSize = tableSize
        this.table = new Array(tableSize)
    }

    find(key) {
        const hash = this.hash(key)
        const index = hash % this.tableSize
        
        return this.table[index]
    }

    put(key, value) {
        const hash = this.hash(key)
        const index = hash % this.tableSize

        this.table[index] = value

        return this.table[index]
    }

    delete(key) {
        const hash = this.hash(key)
        const index = hash % this.tableSize
        delete this.table[index]
    }

    update(key, newValue) {
        const hash = this.hash(key)
        const index = hash % this.tableSize

        this.table[index] = newValue

        return this.table[index]
    }

    hash(key) {
        let res = 0
        for(let i = 0; i < key.length; i++) {
            res += key.charCodeAt(i)
        }
        return res
    }
}