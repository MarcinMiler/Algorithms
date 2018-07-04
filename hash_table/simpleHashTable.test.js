import HashTable from './index'

describe('Simple hash table', () => {
    const users = new HashTable(100)

    test('Added new user', () => {
        users.put('John', 'Vino')
        users.put('Mark', 'Adams')

        expect(users.find('John')).toEqual('Vino')
    })

    test('Delete user', () => {
        users.delete('Mark')
        expect(users.find('Mark')).toEqual(undefined)
    })

    test('Update user', () => {
        users.update('John', 'Don')
        expect(users.find('John')).toEqual('Don')
    })

    test('Hash function', () => {
        const hash = users.hash('Aa')
        expect(hash).toEqual(162)
    })
})
