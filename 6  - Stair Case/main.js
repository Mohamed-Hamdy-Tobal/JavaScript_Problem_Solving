function staircase(n) {
    for (let i = 1; i<=n; i++) {
        if (i === 6) {
            console.log("#".repeat(i))
        } else {
            console.log(" ".repeat(n-i - 1),"#".repeat(i))
        }
    }
}
staircase(6)