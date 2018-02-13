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