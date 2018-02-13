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