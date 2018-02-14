
export const insertionSort = x => {
    for(let i = 1; i < x.length; i++) {
        let key = x[i]
        let j = i - 1

        while(j >= 0 && key < x[j]) {
            x[j + 1] = x[j]
            x[j] = key
            j--
        }
    }
    return x
}

export const mergeSort = x => {

    if(x.length === 1) return x

    const middle = Math.floor(x.length / 2)
    
    const left = x.slice(0, middle)
    const right = x.slice(middle)

    return(
        merge(
            mergeSort(left),
            mergeSort(right)
        )
    )
}

const merge = (left, right) => {
    let x = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
          x.push(left[indexLeft])
          indexLeft++
        } else {
          x.push(right[indexRight])
          indexRight++
        }
      }
    return x.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

export const heapSort = x => {
    maxHeap(x, x.length)
    swap(x, 0, x.length-1)

    for(let i = x.length - 2; i >= 0; i--) {
        maxHeap(x, i)
        swap(x, 0, i)
    }
    swap(x, 0 , 1)
}

const maxHeap = (x, length) => {
    let lastParent = Math.floor((length / 2) - 1)

    while(lastParent >= 0) {
        let left = (2 * lastParent) + 1
        let right = (2 * lastParent) + 2
        let largest = 0

        if(x.length - 1 < right && x[left] > x[lastParent]) largest = left

        if(x[left] > x[right] && x[left] > x[lastParent]) largest = left

        if(x[left] < x[right] && x[right] > x[lastParent]) largest = right

        swap(x, lastParent, largest)

        lastParent--
    }
}

const swap = (x, lastParent, largest) => {
    let y = x[lastParent]
    x[lastParent] = x[largest]
    x[largest] = y
}