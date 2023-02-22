let arr = [1, 2, 3, 4, 5]
let minmax = []
let count = 0
let max = 0
let min = 0

function minMaxArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            count += arr[j]
        }
        count -= arr[i]
        minmax.push(count)
        count = 0
    }
    max = Math.max(...minmax)
    min = Math.min(...minmax)
    console.log(min, max)
}

minMaxArr(arr)
