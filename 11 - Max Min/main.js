let arr = [1, 2, 3, 4, 10, 20, 30, 100, 300]

let len = 1
function maxMin(k, arr) {
    let count = 0
    let myArr = []
    let calcus = 0
    for (let i=0; i<arr.length; i++) {
        if (`${arr[i]}`.length === len) {
            count += 1
        }
    }
    if (count === k) {
        for (let i=0; i<arr.length; i++) {
            if (`${arr[i]}`.length === len) {
                myArr.push(arr[i])
            }
        }
        myMax = Math.max(...myArr)
        myMin = Math.min(...myArr)
        calcus = myMax - myMin
    }
    if (count !== k) {
        len = len + 1
        maxMin(k, arr)
    }
    if (calcus != 0) {
        console.log(calcus)
    }
}
maxMin(3, arr)

// k=3 -> max(10,20,30) - min(10,20,30) = 30 - 10 = 20
// k=4 -> max(1,2,3,4) - min(1,2,3,4) = 4 - 1 = 3


