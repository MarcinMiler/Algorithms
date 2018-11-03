import { HashTable } from '../HashTable'

describe('Hash table', () => {
    it('should create hash table of certain size', () => {
        const h = new HashTable(10)

        expect(h.table.length).toBe(10)
    })

    it('should generate proper hash for specified keys', () => {
        const h = new HashTable(32)

        expect(h.hash('a')).toBe(1)
        expect(h.hash('b')).toBe(2)
        expect(h.hash('abc')).toBe(6)
    })

    it('should be possible to add objects to hash table', () => {
        interface Data {
            some: string
        }

        const h = new HashTable<Data>(10)

        h.put('a', { some: 'value' })
        h.put('b', { some: 'value2' })
        h.put('c', { some: 'value3' })

        expect(h.get('a')).toMatchObject({ some: 'value' })
        expect(h.get('b')).toMatchObject({ some: 'value2' })
        expect(h.get('c')).toMatchObject({ some: 'value3' })
    })

    it('should should track actual keys', () => {
        const h = new HashTable(32)

        h.put('a', 'a')

        expect(h.keys).toMatchObject({ a: 1 })

        h.put('b', 'b')

        expect(h.keys).toMatchObject({ b: 2 })

        h.put('abc', 'abc')

        expect(h.keys).toMatchObject({ abc: 6 })
    })
})
