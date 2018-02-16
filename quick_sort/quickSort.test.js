import { quickSort } from './quickSort'
import { noSorted, sorted } from '../utils/array'

test('heap sort', () => {
    expect(quickSort(noSorted))
    .toEqual(sorted)
})