// Given an array, find the nearest smaller element G[i] for every element A[i] in the array 
// such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that 
//     j is maximum possible AND 
//     j < i AND
//     A[j] < A[i]
// Note: Elements for which no smaller element exist, consider next smaller element as -1.

// Input Format

// First line contains an integer N denoting the number of elements in the array (not necessarily
//      distinct).

// Second line contains N space separated integers denoting the elements of the array.

// Constraints

// N <= 100000

// Output Format

// Print N space separated integers denoting the array G.

// Sample Input 0

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 0

// -1 -1 -1 -1 4 24 24 -1


function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var numberOfElements = Number(input[0]);

    var givenArray = input[1].split(' ').map(Number);
    var stack = [];
    var result = "";

    // console.log("numberOfElements, givenArray", numberOfElements, givenArray);

    for (var i = 0; i < numberOfElements; i++) {

        while (stack[stack.length - 1] >= givenArray[i]) {
            stack.pop();
        }

        if (stack.length === 0) {

            result = result + "-1" + " ";
            stack.push(givenArray[i]);
        } else {

            result = result + stack[stack.length - 1] + " ";
            stack.push(givenArray[i]);
        }
    }
    console.log(result);
}

processData("8\n39 27 11 4 24 32 32 1")