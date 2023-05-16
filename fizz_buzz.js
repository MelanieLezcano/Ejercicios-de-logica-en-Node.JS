let fizz_buzz = n => {
    let num = parseInt(n)
    let array = []
    
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("FizzBuzz");
        } else if (i % 3 === 0){
            array.push("Fizz")
        } else if (i % 5 == 0){
            array.push("Buzz")
        } else {
            array.push(i)
        }
        
    }
    return array

}

console.log(fizz_buzz("20.3"));