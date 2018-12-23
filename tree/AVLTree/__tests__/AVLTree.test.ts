import { AVLTree } from "../index"

describe("AVL Tree", () => {
    it("should do simple left-left rotation", () => {
        const t = new AVLTree()

        t.put(3)
        t.put(2)
        t.put(1)

        expect(t.root.value).toBe(2)
        expect(t.root.left!.value).toBe(1)
        expect(t.root.height).toBe(1)

        t.put(0)

        expect(t.root.left!.value).toBe(1)
        expect(t.root.height).toBe(2)

        t.put(-1)

        expect(t.root.left!.value).toBe(0)
        expect(t.root.height).toBe(2)
    })

    it("should do simple right-right rotation", () => {
        const t = new AVLTree()

        t.put(1)
        t.put(2)
        t.put(3)

        expect(t.root.value).toBe(2)
        expect(t.root.height).toBe(1)
        expect(t.root.left!.value).toBe(1)

        t.put(4)

        expect(t.root.right!.value).toBe(3)
        expect(t.root.height).toBe(2)

        t.put(5)

        expect(t.root.right!.value).toBe(4)
        expect(t.root.height).toBe(2)
    })

    it("should do simple left-right rotation", () => {
        const t = new AVLTree()

        t.put(20)
        t.put(10)
        t.put(15)

        expect(t.root.value).toBe(15)
        expect(t.root.height).toBe(1)
        expect(t.root.left!.value).toBe(10)

        t.put(8)

        expect(t.root.left!.value).toBe(10)
        expect(t.root.height).toBe(2)

        t.put(9)

        expect(t.root.left!.value).toBe(9)
        expect(t.root.height).toBe(2)
        expect(t.root.left!.left!.value).toBe(8)
        expect(t.root.left!.right!.value).toBe(10)
    })

    it("should do simple right-left rotation", () => {
        const t = new AVLTree()

        t.put(10)
        t.put(30)
        t.put(20)

        expect(t.root.value).toBe(20)
        expect(t.root.height).toBe(1)
        expect(t.root.right!.value).toBe(30)

        t.put(40)

        expect(t.root.right!.value).toBe(30)
        expect(t.root.height).toBe(2)

        t.put(35)

        expect(t.root.right!.value).toBe(35)
        expect(t.root.height).toBe(2)
    })
})
