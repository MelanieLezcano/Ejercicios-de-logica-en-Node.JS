let number_cardinality = n => {
    let num = String(n)
    let final = num.slice(-1)
    let finalNum = parseInt(final)

    if (final === "0" ) {
        num = "zero"
    } else if (final === "5" ) {
        num = "five"
    } else if (finalNum % 2 === 0 && finalNum !== 0 ) {
        num = "even"
    } else if (finalNum % 2 !== 0 && finalNum !== 5 ) {
        num = "odd"
    } else {
        num
    }
    return num
}

console.log(number_cardinality(99));