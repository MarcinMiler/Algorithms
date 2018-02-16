import { swap } from '../utils/swap'

export const heapSort = x => {
    
    let n = x.length

    for(let i = Math.floor((n / 2) - 1); i >= 0; i--) {
        maxHeap(x, n, i)
    }

    for(let i = n - 1; i > 0; i--) {
        swap(x, 0, i)
        n--
        maxHeap(x, n, 0)
    }
    return x
}

const maxHeap = (x, n, i) => {

    let max = i
    let left = (2 * i) + 1
    let right = (2 * i) + 2

    if(left < n && x[left] > x[max]) max = left
    
    if(right < n && x[right] > x[max]) max = right

    if(max != i) {
        swap(x, max, i)
        maxHeap(x, n, max)
    }
}