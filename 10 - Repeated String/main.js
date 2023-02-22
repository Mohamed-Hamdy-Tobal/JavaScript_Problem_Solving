function repeatedString(s, n) {
    let count = 0
    rep = parseInt(n/s.length)
    mystr = s.repeat(rep)
    if (mystr.length < n) {
        neg = n - mystr.length
        complete = s.substr(0, neg)
        mystr =  mystr.concat(complete)
    }
    let myArr = mystr.split("")
    for (i=0; i<myArr.length; i++) {
        if (myArr[i] === "a") {
            count += 1
        }
    }
    console.log(count)
}

repeatedString("aba", 10)

// function repeatedString(s, n) {
//    let occurances = (s.split("a").length - 1);
//    let max = Math.floor(n / s.length);
//    let totalAs= occurances * max;
//    totalAs += (s.slice(0, n % s.length).split("a").length - 1);
//    return max;
// }


// console.log(repeatedString("aba", 10))