function oddishOrEvenish(num) {
  let count = 0
	let myNum = `${num}`.toString().split("")
  for (i=0; i<myNum.length; i++) {
    count += +myNum[i]
  }
  count %= 2
  if (count === 1) {
    console.log("Oddish")
  } else {
    console.log("Evenish")
  }
}

oddishOrEvenish(43) // "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) // "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) // "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0