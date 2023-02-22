function superDigit(num) {
  // Write your code here
  let stNum = `${num}`.toString()
  let count = 0
  let sum = 0
  for (i=0; i<stNum.length; i++) {
    count += 1
    sum += +stNum[i] 
  }
  sum *= count 
  num = sum

  function multi(num) {
    let stNum = `${num}`.toString()
    let innerSum = 0
    for (i=0; i<stNum.length; i++) {
      innerSum += +stNum[i] 
    }
    if (innerSum.toString().length == 1) {
      return innerSum
    } else {
      return multi((+innerSum))
    }
  }

  if (num.toString().length == 1) {
    return num
  } else {
    return multi((+num))
  }
}

console.log(superDigit(148)) // 3

// super_digit(P) = super_digit(148148148) 
//                = super_digit(1+4+8+1+4+8+1+4+8)
//                = super_digit(39)
//                = super_digit(3+9)
//                = super_digit(12)
//                = super_digit(1+2)
//                = super_digit(3)
//                = 3