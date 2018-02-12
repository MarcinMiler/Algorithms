import { insertionSort } from './index'

test('insertion sort', () => {
    let x = []
    for(let i = 0; i < 100; i++) x.push(Math.floor((Math.random() * 100) + 1))
    expect(insertionSort(x))
    .toEqual(x.sort())
})