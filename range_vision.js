let range_vision = n => {
    let num = String(n)

    for (let value of num ) {
        let valueNumber = parseInt(value)
      /*   let valueNegat = -valueNumber */
        let position = num.indexOf(value) + 1
        let positionLeft = position - valueNumber
        let right = num.slice(position,valueNumber + 1)
        let left = num.slice(position, )

        console.log(position);
        console.log(positionLeft);
    }
    return num
}

console.log(range_vision(34315));