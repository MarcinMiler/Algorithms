import { AVLTree } from "./tree/AVLTree"

const tree = new AVLTree()
window.tree = tree

tree.insert(3)
tree.insert(2)
tree.insert(1)
console.log(tree.root)
tree.rotateRightRight(tree.root)
console.log(tree.root)
