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
            if(border != i) swap(x, border, i)
            
        }
        i++
    }
    border++
    if(border != right) swap(x, border, right)

    quick(x, left, border - 1)
    quick(x, border + 1, right)
}

const midPivot = (x, left, right) => {
    const pivot = left + (right - left) / 2
    const pivotValue = x[pivot]
    swap(x, pivot, right)
    return pivotValue
}

const swap = (x, i, j) => {
    let temp = x[i]
    x[i] = x[j]
    x[j] = temp
}