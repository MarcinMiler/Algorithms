import { GraphVertex } from "./GraphVertex"
import { GraphEdge } from "./GraphEdge"

export class Graph {
    vertices: {
        [key: string]: GraphVertex<string>
    }
    edges: {}
    isDirected: boolean

    constructor(isDirected: boolean) {
        this.vertices = {}
        this.edges = {}
        this.isDirected = isDirected
    }

    getVertexByKey(key: string) {
        return this.vertices[key]
    }

    addVertex(newVertex: GraphVertex<string>) {
        this.vertices[newVertex.getKey()] = newVertex
    }

    addEdge(edge: GraphEdge) {
        let startVertex = this.getVertexByKey(edge.startVertex.getKey())
        let endVertex = this.getVertexByKey(edge.endVertex.getKey())

        if (!startVertex) {
            this.addVertex(edge.startVertex)
            startVertex = this.getVertexByKey(edge.startVertex.getKey())
        }

        if (!endVertex) {
            this.addVertex(edge.endVertex)
            endVertex = this.getVertexByKey(edge.endVertex.getKey())
        }

        if (this.edges[edge.getKey()]) {
            throw new Error("Edge has already been added before")
        } else {
            this.edges[edge.getKey()] = edge
        }

        if (this.isDirected) {
            startVertex.addEdge(edge)
        } else {
            startVertex.addEdge(edge)
            endVertex.addEdge(edge)
        }
    }
}
