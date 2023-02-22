let arr = [1, 10, 15, -2, -5, 0, "Z", "A", 8, -30, 5, "C"];

let count = 0
let neg =0
let str = []

function getResult(arr) {
    for (i=0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] >= 0) {
                count += arr[i]
            }
        }
        if (typeof arr[i] === "number") {
            if (arr[i] <= -1) {
                neg += 1
            }
        }
        if (typeof arr[i] === "string") {
            str.push(arr[i])
        }
    }
    return [count, neg, str.sort().join("")]
}

let result = getResult(arr)
console.log(result)
// Ouput
// [39, 3, 'ACZ']


/* Word Before Last Length */
function wordBeforeLastLength(sentence) {
    let text = []
    let result = sentence.split(" ")
    for (i=0; i< result.length; i++) {
        if (result[i].length != 0) {
            text.push(result[i])
        }
    }
    if (text.length <= 1) {
        return false
    } else {
        if (text.slice(-1).join().length === 1) {
            text.pop()
        }
    }
    return `${text.slice(-2, -1)} => ${text.slice(-2, -1).join().length}`
    }

  console.log(wordBeforeLastLength("Elzero Web School")); // Web => 3
  console.log(wordBeforeLastLength("Hello Elzero Web School    A ")); // Web => 3
  console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3
  console.log(wordBeforeLastLength("Hello")); // False
  console.log(wordBeforeLastLength("Hello Elzero")); // Hello
  console.log(wordBeforeLastLength("Hello Elzero    A")); // Hello

//   return `${text.slice(-2, -1)} => ${text.slice(-2, -1).length}`