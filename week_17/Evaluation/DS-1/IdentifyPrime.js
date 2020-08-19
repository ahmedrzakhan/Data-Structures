function runProgram(input) {
  let n = Number(input);
  //   console.log(n);

  const result = checkIfPrime(n, Math.floor(Math.sqrt(n)));
  result ? console.log("Yes") : console.log("No");
}

const checkIfPrime = (n, i) => {
  if (i === 1) {
    return true;
  }

  if (n % i === 0) {
    return false;
  }

  return checkIfPrime(n, i - 1);
};

runProgram("1");
