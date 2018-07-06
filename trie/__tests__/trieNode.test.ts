import { TrieNode } from '../trieNode'

describe('Trie Node', () => {
    it('should create trie node', () => {
        const trieNode = new TrieNode('*')

        expect(trieNode).toBeDefined()
    })

    it('should add child', () => {
        const trieNode = new TrieNode('*')

        trieNode.addChild('a')
        trieNode.addChild('b')
        trieNode.addChild('c')

        expect(trieNode.hasChild('a')).toBe(true)
        expect(trieNode.hasChild('b')).toBe(true)
        expect(trieNode.hasChild('c')).toBe(true)

        expect(trieNode.getChild('a')).toMatchObject({
            character: 'a',
            isCompleteWord: false
        })
    })

    it('should suggets children', () => {
        const trieNode = new TrieNode('*')

        trieNode.addChild('a')
        trieNode.addChild('b')
        trieNode.addChild('c')

        expect(trieNode.suggestChildren()).toEqual(['a', 'b', 'c'])
    })
})
