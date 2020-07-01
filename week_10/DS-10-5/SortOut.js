// Given an array A of non-negative integers of size m. Your task is to sort the 
// array in non-decreasing order and print out the original indices of the new sorted array.

// Example: A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// **You must not use built-in sort functionality. Doing that will lead to 
// disqualification from next contest **

// Input Format

// The first line of input consists of the size of the array

// The next line consists of the array of size m

// Constraints

// 1<=m<=10000

// 0<=A[i]<=1000

// Output Format

// Output consists of a single line of integers

// Sample Input 0

// 5
// 4 5 3 7 1
// Sample Output 0

// 4 2 0 1 3

function processData(input) {
    //Enter your code here
    input = input.split('\n');

    var numberOfElements = Number(input[0]);
    var givenArray = input[1].split(' ').map(Number);
    var indexArray = [];

    // console.log("numberOfElements givenArray", numberOfElements, givenArray);

    for (var i = 0; i < numberOfElements; i++) {
        indexArray[i] = i;
    }
    // console.log("indexArray", indexArray);

    for (var i = 0; i < numberOfElements - 1; i++) {
        for (var j = 0; j < numberOfElements - i - 1; j++) {

            if (givenArray[j] > givenArray[j + 1]) {
                swap(givenArray, j, j + 1);
                swap(indexArray, j, j + 1);
            }
        }
    }
    // console.log("givenArray", givenArray);
    console.log(indexArray.join(' '));
}

var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}