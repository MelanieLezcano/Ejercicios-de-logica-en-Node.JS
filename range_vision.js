let range_vision = n => {
    let num = String(n)

    for (let value of num ) {
        let valueNumber = parseInt(value);
      /*   let valueNegat = -valueNumber */
        let position = num.indexOf(value) + 1;
        let positionLeft = position - valueNumber;
        let signo = Math.sign(positionLeft);
        let ternario = signo === -1 || signo === 0 ? positionLeft = 1 : positionLeft;
        let ternarioUno = ternario - 1;
        let right = num.slice(position,valueNumber + 1);
        let left = num.slice(ternarioUno, position - 1);
        let rightLeft = String(left) + String(right)

        let sum = 0;
        rightLeft.split('').forEach(rightLeft => sum += parseInt(rightLeft) )

        console.log("suma > " + sum);
    }
    return num 
}

console.log(range_vision(34315));