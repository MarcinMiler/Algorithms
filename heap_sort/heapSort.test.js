import { heapSort } from './heapSort'
import { noSorted, sorted } from '../utils/array'

test('heap sort', () => {
    expect(heapSort(noSorted))
    .toEqual(sorted)
})