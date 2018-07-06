import { HashTable } from '../hash_table'

export class TrieNode {
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
