export class Heap {
    public heap: Array<number>

    public constructor() {
        this.heap = []
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    private hasParent(index: number): Boolean {
        return this.getParentIndex(index) >= 0
    }

    private parent(index: number): number {
        return this.heap[this.getParentIndex(index)]
    }

    private swap(indexOne: number, indexTwo: number): void {
        const temp = this.heap[indexOne]

        this.heap[indexOne] = this.heap[indexTwo]
        this.heap[indexTwo] = temp
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1

        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }

    public peek(): number | null {
        if (!this.heap) return null

        return this.heap[0]
    }

    public push(item: number) {
        this.heap.push(item)

        this.heapifyUp()
    }

    public pool(): void {}
}
