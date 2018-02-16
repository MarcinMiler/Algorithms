import { insertionSort } from './insertionSort'
import { noSorted, sorted } from '../utils/array'

test('heap sort', () => {
    expect(insertionSort(noSorted))
    .toEqual(sorted)
})