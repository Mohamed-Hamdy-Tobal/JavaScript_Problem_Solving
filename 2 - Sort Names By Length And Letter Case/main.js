// def do_sort(names):
//   # Your Code

// # Test Cases
// print(do_sort(["Ameer", "alsayed", "Mahmoud", "Ahmed", "ayman", "Israa", "Anas", "amal", "amr", "aml"]))
// # ['amr', 'aml', 'amal', 'ayman', 'alsayed', 'Anas', 'Ameer', 'Ahmed']

let arr = ["Ameer", "alsayed", "Mahmoud", "Ahmed", "ayman", "Israa", "Anas", "amal", "amr", "aml"]

function getSort(arr) {
    let newArr1 = []
    let newArr2 = []
    for (i=0; i<arr.length; i++) {
        if ((arr[i][0] === "a") ){
          newArr1.unshift(arr[i])
        }
        else {
            newArr1 = newArr1.sort().reverse()
            for (let s = 1; s < newArr1.length; s++) {
                for (let j = 0; j < newArr1.length - s; j++) { // starts up to length - 1
                  if (newArr1[j].length > newArr1[j + 1].length) {
                    [newArr1[j], newArr1[j + 1]] = [newArr1[j + 1], newArr1[j]];
                  }
                }
              }
        }
        if ((arr[i][0] === "A") ){
          newArr2.unshift(arr[i])
        }
        else {
            newArr2 = newArr2.sort().reverse()
            for (let s = 1; s < newArr2.length; s++) {
                for (let j = 0; j < newArr2.length - s; j++) { // starts up to length - 1
                  if (newArr2[j].length > newArr2[j + 1].length) {
                    [newArr2[j], newArr2[j + 1]] = [newArr2[j + 1], newArr2[j]];
                  }
                }
              }
        }
    }
    return newArr1.concat(newArr2)
}
console.log(getSort(arr))
console.log(arr)



