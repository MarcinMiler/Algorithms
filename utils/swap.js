export const swap = (x, i, j) => {
    let temp = x[i]
    x[i] = x[j]
    x[j] = temp
}