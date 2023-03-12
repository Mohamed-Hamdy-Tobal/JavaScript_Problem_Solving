function params(shape, side) {
    countS = 0
    countC = 0
    for (i=0; i<shape.length; i++) {
        while (shape[i] ==  "s" && countS < 1) {
            console.log(4 * side)
            countS += 1
        }
    }
    for (i=0; i<shape.length; i++) {
        while (shape[i] ==  "c" && countC < 1) {
            console.log(6.28 * side)
            countC += 1
        }
    }
}
params("s", 7)
params("c", 4)


// Challenge With No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.