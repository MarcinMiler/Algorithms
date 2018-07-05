export class Heap {
    public heap: Array<number>

    public constructor() {
        this.heap = []
    }

    private getLeftChildIndex = (index: number): number => 2 * index + 1

    private getRightChildIndex = (index: number): number => 2 * index + 2

    private getParentIndex = (index: number): number =>
        Math.floor((index - 1) / 2)

    private hasParent = (index: number): Boolean =>
        this.getParentIndex(index) >= 0

    private hasLeftChild = (index: number): Boolean =>
        this.getLeftChildIndex(index) >= 0

    private hasRightChild = (index: number): Boolean =>
        this.getRightChildIndex(index) >= 0

    private parent = (index: number): number =>
        this.heap[this.getParentIndex(index)]

    private leftChild = (index: number): number =>
        this.heap[this.getLeftChildIndex(index)]

    private rightChild = (index: number): number =>
        this.heap[this.getRightChildIndex(index)]

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

    private heapifyDown(): void {
        let currentIndex = 0

        while (this.hasLeftChild(currentIndex)) {
            let smallerChildIndex = this.getLeftChildIndex(currentIndex)

            if (
                this.hasRightChild &&
                this.rightChild(currentIndex) < this.leftChild(currentIndex)
            ) {
                smallerChildIndex = this.getRightChildIndex(currentIndex)
            }

            if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
                break
            } else {
                this.swap(currentIndex, smallerChildIndex)
            }
            currentIndex = smallerChildIndex
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

    public pool(): number {
        if (this.heap.length === 1) {
            this.heap.pop()
        }

        const firstItem = this.heap[0]

        this.heap[0] = this.heap.pop() as number
        this.heapifyDown()

        return firstItem
    }
}
