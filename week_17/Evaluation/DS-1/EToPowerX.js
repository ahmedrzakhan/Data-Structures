// EtopowerX
// Description

// One famous series says

// Image

// Using the below explanation for n-th term of e^x, calculate the value of e^x
//  given x and n. Do not calculate it directly using the formula and do not write any iterative code.

// Image

// Input
// Input Format

// First and the only line of code contains x and n respectively

// Constraints

// x <= 14

// n <= 12

// Output
// Print the value to 4 places after the decimal. For example, 13.1310 is a valid
//  answer but 13.131 is not. Also, 12 is not a valid answer but 12.0000 is a valid answer

// Sample Input 1

// 4 2
// Sample Output 1

// 13.0000

function runProgram(input) {
  let [x, n] = input.split(" ").map(Number);
  //   console.log(x, n);

  let sum = 0;

  //   for (let i = 0; i <= n; i++) {
  //     sum = sum + x ** i / fact(i);
  //   }
  //   console.log(sum);

  const ePower = (i, sum) => {
    if (i === n + 1) {
      return sum;
    } else {
      return ePower(i + 1, sum + x ** i / fact(i));
    }
  };

  const result = ePower(0, sum);
  console.log(result.toFixed(4));
}

const fact = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};
runProgram("4 2");
