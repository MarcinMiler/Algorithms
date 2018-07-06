import { HashTable } from './index'

describe('Hash table', () => {
    it('should create hash table', () => {
        const hashTable = new HashTable(100)

        expect(hashTable).toBeDefined()
        expect(hashTable.table).toHaveLength(100)
    })

    it('should add new items', () => {
        const hashTable = new HashTable(10)

        hashTable.put('Key', 'Value')

        const find = hashTable.get('Key')

        expect(find).toEqual('Value')
    })

    it('should add items to linked list', () => {
        const hashTable = new HashTable(10)

        hashTable.put('Kinga', 'Some value')
        hashTable.put('Kin', 'Some value2')

        const find = hashTable.get('Kin')

        expect(find).toEqual('Some value2')
    })

    it('should delete item', () => {
        const hashTable = new HashTable(10)

        hashTable.put('Kinga', 'Some value')
        hashTable.delete('Kinga')

        const findDeleteItem = hashTable.get('Kinga')

        expect(findDeleteItem).toBeUndefined()
    })
})
