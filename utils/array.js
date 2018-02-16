import { heapSort } from '../heap_sort/heapSort'

let array = []

for(let i = 0; i < 1000; i++) array.push(Math.floor((Math.random() * 1000) + 1))

export const noSorted = array
export const sorted = heapSort(noSorted)