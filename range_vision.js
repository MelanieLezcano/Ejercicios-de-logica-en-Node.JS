let range_vision = n => {
    let num = String(n)

    for (let value of num ) {
        let valueNumber = parseInt(value)
      /*   let valueNegat = -valueNumber */
        let position = num.indexOf(value) + 1
        let positionLeft = position - valueNumber
        let signo = Math.sign(positionLeft) 
        /* signo === -1 | === 0 ? positionLeft = 1 : positionLeft */
        let ternario = signo === -1 || signo === 0 ? positionLeft = 1 : positionLeft
        let right = num.slice(position,valueNumber + 1)
        let left = num.slice(position, ternario)

        console.log("valor > " + valueNumber);
        console.log("posicion > " + position);
        console.log("izquierda > " + left);
        console.log("derecha > " + right);
        console.log("negativo o positivo > " + signo);
        console.log("------------------------------------");
    }
    return num
}

console.log(range_vision(34315));