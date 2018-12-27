import { GraphVertex } from "./GraphVertex"

export class GraphEdge {
    startVertex: GraphVertex<string>
    endVertex: GraphVertex<string>
    weight: number

    constructor(
        startVertex: GraphVertex<string>,
        endVertex: GraphVertex<string>,
        weight: number = 0
    ) {
        this.startVertex = startVertex
        this.endVertex = endVertex
        this.weight = weight
    }

    getKey() {
        const startKey = this.startVertex.getKey()
        const endKey = this.endVertex.getKey()

        return `${startKey}_${endKey}`
    }
}
