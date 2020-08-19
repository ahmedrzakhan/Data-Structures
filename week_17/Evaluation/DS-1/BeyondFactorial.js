function runProgram(input) {

    let n = Number(input);

    const result = fact(n);
    console.log(result.toFixed(4))
}

const fact = (n) => {

    if ( n === 1 ) {
        return 0;
    } else {
        return Math.log(n) + fact(n - 1)
    }
}


runProgram("3")