import { GraphVertex } from "./graph/GraphVertex"
import { Graph } from "./graph/Graph"
import { GraphEdge } from "./graph/GraphEdge"
const graph = new Graph()

const v1 = new GraphVertex("A")
const v2 = new GraphVertex("B")

graph.addVertex(v1)
graph.addVertex(v2)

const edgev1v2 = new GraphEdge(v1, v2)

graph.addEdge(edgev1v2)

console.log(graph)
