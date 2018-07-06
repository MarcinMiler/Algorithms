import { TrieNode } from './trieNode'

export class Trie {
    public head: TrieNode

    public constructor(HEAD_CHARACTER: string) {
        this.head = new TrieNode(HEAD_CHARACTER)
    }

    private getLastCharacterNode(word: string): TrieNode | null {
        const characters = Array.from(word)
        let currentNode = this.head

        for (let i = 0; i < characters.length; i++) {
            if (!currentNode.hasChild(characters[i])) return null
            currentNode = currentNode.getChild(characters[i])
        }

        return currentNode
    }

    public addWord(word: string): void {
        let currentNode = this.head
        const characters = Array.from(word)

        characters.forEach(
            (character, i) =>
                (currentNode = currentNode.addChild(
                    character,
                    characters.length - 1 === i
                ))
        )
    }

    public suggestNextCharacters(word: string): Array<string> | null {
        const lastCharacter = this.getLastCharacterNode(word)

        if (!lastCharacter) return null

        return lastCharacter.suggestChildren()
    }

    public wordExists(word: string): boolean {
        return !!this.getLastCharacterNode(word)
    }
}
