// Given a number N and series of M symbols, each symnol represents a particular
// operation  that needs to be done on the number N

// @ - Multiply by 10

// ! - Add 2 to the value

// % - Subtract 5 from the value

// ^ - sqaure the value (raise the power by two)

// $ - Add 37 to the value

// Note: the number and result can be negative as well

// Input Format

// First linec contains N, the value on which operations are to be performed

// Second line contains a string of M characters where each character represents
// one of the above operation to be performed on N

// Constraints

// 0 <= N <= 1000

// 0 <= M <= 10000

// Output Format

// Z end result after performing all the operations

// Sample Input 0

// 2
// ^@!@
// Sample Output 0

// 420
// Explanation 0

// 2 ^ 2 = 4 @ 4 = 40 ! 40 = 42 @ 42 = 420

function processData(input) {
  //Enter your code here
  // console.log('input', input);
  // console.log('typeof input', typeof input);

  firstArray = input.split("\n");
  // console.log('firstArray', firstArray);
  // console.log('typeof firstArray', typeof firstArray);

  givenNumber = Number(firstArray[0]);
  // console.log( 'givenNumber', givenNumber );
  // console.log('typeof givenNumber', typeof givenNumber);

  charactersArray = firstArray[1];
  // console.log('charactersArray', charactersArray);

  for (var i = 0; i < charactersArray.length; i++) {
    character = charactersArray[i];
    // console.log('character', character);

    if (character === "^") {
      givenNumber = givenNumber ** 2;
    }

    if (character === "@") {
      givenNumber = givenNumber * 10;
    }

    if (character === "!") {
      givenNumber = givenNumber + 2;
    }

    if (character === "$") {
      givenNumber = givenNumber + 37;
    }

    if (character === "%") {
      givenNumber = givenNumber - 5;
    }
  }

  console.log(givenNumber);
}
