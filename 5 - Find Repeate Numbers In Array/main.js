let arr = [1, 2, 3, 3, 3, 4]

function repeate(arr) {
    let count = 1
    let newArr = []
    for (let i = 0; i<arr.length; i++) {
        if (newArr.includes(arr[i]) === true) {
            count += 1
        }
        newArr.push(arr[i])
    }
    return count
}
console.log(repeate(arr))


function birthdayCakeCandles(ar) {
    var maxHeight = Math.max(...ar);
    var maxHeightCount = 0;  
    for(var i = 0; i < ar.length; i++){
        if (ar[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    console.log(maxHeightCount);
    return maxHeightCount;
}
console.log(birthdayCakeCandles(arr))