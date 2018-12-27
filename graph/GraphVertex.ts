import { LinkedList } from "../linked_list/LinkedList"

export class GraphVertex<T> {
    value: T
    edges: LinkedList<string>

    constructor(value: T) {
        this.value = value
        this.edges = new LinkedList()
    }

    getKey() {
        return this.value
    }

    addEdge(edge: any) {
        this.edges.append(edge)
    }
}
