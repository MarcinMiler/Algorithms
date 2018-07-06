import { HashTable } from '../hash_table'

class TrieNode {
    //@ts-ignore
    private character: string
    //@ts-ignore
    private isCompleteWord: boolean
    private children: HashTable

    public constructor(character: string, isCompleteWord: boolean = false) {
        this.character = character
        this.isCompleteWord = isCompleteWord
        this.children = new HashTable(127)
    }

    public addChild(
        character: string,
        isCompleteWord: boolean = false
    ): TrieNode {
        if (!this.children.hasKey(character)) {
            this.children.put(
                character,
                new TrieNode(character, isCompleteWord)
            )
        }

        return this.children.get(character)
    }

    public getChild(character: string): TrieNode {
        return this.children.get(character)
    }

    public hasChild(character: string): boolean {
        return this.children.hasKey(character)
    }

    public suggestChildren(): Array<string> {
        return [...this.children.getKeys()]
    }
}

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
