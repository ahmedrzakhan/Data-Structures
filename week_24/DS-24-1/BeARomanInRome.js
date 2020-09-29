
// Be A Roman in Rome!
// Description

// Nick and Jack are good friends and both are very good at numbers, they 
// want to play a fun game to know their understanding of numbers conversion 
// into roman numerals. Nick will give a number N and Jack has to guess the
//  equivalent Roman Numeral.

// Jack can refer to the following table :

// Image

// Input
// Input Format

// Input consists of single integer N

// Constraints

// 1 <= N <= 3999

// Output
// Print equivalent roman number in a single line.

// Sample Input 1 

// 2085
// Sample Output 1

// MMLXXXV

// TC (O(N))

function runProgram(input) {
  let obj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let keys = Object.keys(obj).map(Number);
  //   console.log("keys", keys);

  let values = Object.values(obj);
  //   console.log("values", values);

  let n = Object.keys(obj).length;
  //   console.log("n", n);

  let val = Number(input);
  //   console.log("val", val);

  let result = "";

  for (let i = n - 1; i >= 0; i--) {
    while (keys[i] <= val) {
      val = val - keys[i];
      //   console.log("keys[i]", keys[i]);
      result = result + values[i];
      //   console.log("values[i", values[i]);
    }
  }
  console.log(result);
}

runProgram("2085");
