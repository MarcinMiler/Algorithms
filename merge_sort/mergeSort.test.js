import { mergeSort } from './mergeSort'
import { noSorted, sorted } from '../utils/array'

test('heap sort', () => {
    expect(mergeSort(noSorted))
    .toEqual(sorted)
})