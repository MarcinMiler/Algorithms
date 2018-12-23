import { AVLTree } from "./tree/AVLTree"

const tree = new AVLTree()

tree.put(4)
tree.put(3)
tree.put(2)

console.log(tree.toString())
