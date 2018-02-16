import { insertionSort, mergeSort, heapSort, quickSort } from './index'

let noSorted = []
for(let i = 0; i < 1000; i++) noSorted.push(Math.floor((Math.random() * 1000) + 1))
let sorted = heapSort(noSorted)

test('insertion sort', () => {
    expect(insertionSort(noSorted))
    .toEqual(sorted)
})

test('merge sort', () => {
    expect(mergeSort(noSorted))
    .toEqual(sorted)
})

test('heap sort', () => {
    expect(heapSort(noSorted))
    .toEqual(sorted)
})

test('quick sort', () => {
    expect(quickSort(noSorted))
    .toEqual(sorted)
})