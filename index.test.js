import { insertionSort, mergeSort, heapSort, standardQuickSort } from './index'

const noSorted = [33, 8, 63, 41, 72, 91, 47, 7, 90, 10, 25, 13, 30, 7, 62, 74, 92, 4, 22, 98, 76, 3, 9, 51, 86, 22, 99, 41, 40, 66, 19, 50, 51, 5, 73, 44, 81, 30, 61]
const sorted = [3, 4, 5, 7, 7, 8, 9, 10, 13, 19, 22, 22, 25, 30, 30, 33, 40, 41, 41, 44, 47, 50, 51, 51, 61, 62, 63, 66, 72, 73, 74, 76, 81, 86, 90, 91, 92, 98, 99]

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
    expect(standardQuickSort(noSorted))
    .toEqual(sorted)
})