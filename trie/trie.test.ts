import { Trie } from './index'

describe('Trie', () => {
    it('should create trie', () => {
        const trie = new Trie('*')

        expect(trie).toBeDefined()
    })
})
