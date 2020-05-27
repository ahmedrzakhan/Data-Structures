
// Haren wants to change his profile picture on Facebook. Now Facebook has some restriction over the dimension of picture that we can upload.

// Length of every picture uploaded should be greater than L and width should be greater than W

// If his picture passes both the criteria, print "Upload"

// In case it could not pass becuase of length, print "Increase Length"

// In all other cases, print "Increase Width"

// Input Format

// First line contains 2 space separated integers which are L and W

// Second line contains length and width of uploaded pic

// Constraints

// L,H<100

// Output Format

// Output one of the strings based on condition met

// Sample Input 0

// 12 14
// 8 19
// Sample Output 0

// Increase Length
// Explanation 0

// Acceptable limit of length is 12 units and length of pic provided is 8
//  which is lesser than the acceptable limit, so output will be "Increase Length"




function processData(input) {
    //Enter your code here
    array1 = input.split('\n');
    // console.log(array1)
    value1 = array1[0];
    value2 = array1[1];
    // console.log(value1);
    arrayConstraint = value1.split(' ');
    // console.log(arrayConstraint)
    // console.log(typeof arrayConstraint)
    arrayConstraint1 = arrayConstraint[0]
    arrayConstraint2 = arrayConstraint[1]
    numberConstraint1 = Number(arrayConstraint1)
    numberConstraint2 = Number(arrayConstraint2)
    // console.log(Number(arrayConstraint1))
    // console.log(Number(arrayConstraint2))
    // console.log(typeof value1)
    // console.log(value2);
    // number1 = value1[1];
    // console.log(number1);
        arrayUpload = value2.split(' ');
    // console.log(arrayUpload)
    // console.log(typeof arrayUpload)
    arrayUpload1 = arrayUpload[0]
    arrayUpload2 = arrayUpload[1]
    numberArrayUpload1 = Number(arrayUpload1)
    numberArrayUpload2 = Number(arrayUpload2)
    // console.log(Number(arrayUpload1))
    // console.log(Number(arrayUpload2))
    
    if (numberConstraint1 > numberArrayUpload1) {
        console.log('Increase Length');
    } else {
        console.log('Increase Width')
    }
} 