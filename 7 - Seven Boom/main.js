function sevenBoom(arr) {
  let count = 0
	for (i=0; i<arr.length; i++) {
    if (arr[i] === 7) {
      count += 1
    } 
    if (arr[i]> 10) {
      let mynum = `${arr[i]}`.split("");
      for (j=0;j<mynum.length;j++) {
        if (mynum[j] === "7") {
          count += 1
        } 
      }
    } 
  }
  if (count >= 1) {
    console.log("Boom")
  } else {
    console.log("there is no 7 in the array")
  }
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]) // "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100])// "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 67, 97, 86]) // "Boom!"
// 97 contains the number seven.