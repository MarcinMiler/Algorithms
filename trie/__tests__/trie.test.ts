import { Trie } from '../index'

describe('Trie', () => {
    it('should create trie', () => {
        const trie = new Trie('*')

        expect(trie).toBeDefined()
    })

    it('should add new words', () => {
        const trie = new Trie('*')

        trie.addWord('Cat')
        trie.addWord('Catzie')
        trie.addWord('Dog')

        expect(trie.wordExists('Cat')).toBe(true)
        expect(trie.wordExists('Catzie')).toBe(true)
        expect(trie.wordExists('Dog')).toBe(true)
        expect(trie.wordExists('Turtle')).toBe(false)
    })

    it('should suggest next character', () => {
        const trie = new Trie('*')

        trie.addWord('Cat')
        trie.addWord('Catzie')
        trie.addWord('Card')

        expect(trie.suggestNextCharacters('Cat')).toEqual(['z'])
        expect(trie.suggestNextCharacters('Ca')).toEqual(['t', 'r'])
    })
})
