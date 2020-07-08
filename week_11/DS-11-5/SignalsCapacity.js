// There are many signal towers present in Bangalore.Towers are aligned in a straight 
// horizontal line(from left to right) and each tower transmits a signal in the right to 
// left direction.

// Tower X shall block the signal of Tower Y if Tower X is present to the left of Tower Y
//  and Tower X is taller than Tower Y. So,the power of a signal of a given tower can be
//   defined as :

// {(the number of contiguous towers just to the left of the given tower whose height is 
//     less than or equal to the height of the given tower) + 1}.

// You need to write a program that finds the power of each tower.

// Input Format

// Each test case has multiple test cases in it:

// First line contains an integer specifying the number of test cases.

// Second line contains an integer n specifying the number of towers.

// Third line contains n space separated integers(H[i]) denoting the height of each tower.

// Constraints

// 1 <= T <= 10

// 2 <= n <= 10^6

// 1 <= H[i] <= 10^8

// Output Format

// Print the range of each tower (separated by a space).

// Sample Input 0

// 2
// 7
// 100 80 60 70 60 75 85
// 5
// 3 5 0 9 8
// Sample Output 0

// 1 1 1 2 1 4 6
// 1 2 1 4 1
// Explanation 0

// There are 2 test case:

// In first test case:
// 7 towers are present, and signal range of each tower separated by space:1 1 1 2 1 4 6

// Similarly,
// In second test case, we have 5 towers whose signal range is given

function processData(input) {
    //Enter your code here
    input = input.split('\n');

    var numberOfTestCases = Number(input[0]);
    // console.log("numberOfTestCases", numberOfTestCases);

    var line = 1;
    for (var i = 0; i < numberOfTestCases; i++) {

        var numberOfElements = Number(input[line]);
        line = line + 1;

        var givenArray = input[line].split(' ').map(Number);
        // console.log("numberOfElements, givenArray", numberOfElements, givenArray);

        getCount(numberOfElements, givenArray);

        line = line + 1;
    }
}

var getCount = function (numberOfElements, arr) {
    // console.log("numberOfElements, arr", numberOfElements, arr);
    var stack = [];
    var result = "";

    for (var i = 0; i < numberOfElements; i++) {

        while (arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result = result + (i + 1) + " ";
        } else {
            result = result + (i - stack[stack.length - 1]) + " ";
        }

        stack.push(i);
    }

    console.log(result);
}