export const standardQuickSort = x => {
    standardQuick(x, 0, x.length - 1)
    return x
}

const standardQuick = (x, left, right) => {
    if(left >= right) return

    let pivot = x[right]
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

    standardQuick(x, left, border - 1)
    standardQuick(x, border + 1, right)
}

const swap = (x, i, j) => {
    let temp = x[i]
    x[i] = x[j]
    x[j] = temp
}