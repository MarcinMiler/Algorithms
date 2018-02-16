
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

    if(max !== i) {
        swap(x, max, i)
        maxHeap(x, n, max)
    }
}

const swap = (x, i, j) => {
    let temp = x[i]
    x[i] = x[j]
    x[j] = temp
}

export const quickSort = x => {
    quick(x, 0, x.length - 1)
    return x
}

const quick = (x, left, right) => {
    if(left >= right) return

    let pivot = midPivot(x, left, right)
    let border = left - 1
    let i = left

    while(i < right) {
        if(x[i] < pivot) {
            border++
            if(border !== i) swap(x, border, i)
        }
        i++
    }
    border++
    if(border !== right) swap(x, border, right)

    quick(x, left, border - 1)
    quick(x, border + 1, right)
}

const midPivot = (x, left, right) => {
    const pivot = left + (right - left) / 2
    const pivotValue = x[pivot]

    swap(x, pivot, right)
    
    return pivotValue
}