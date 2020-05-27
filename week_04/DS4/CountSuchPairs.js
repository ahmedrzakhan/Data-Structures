// You are given an array A of N integers along with a target integer. Your task is to 
// find out the number of pairs of integers present in the array whose sum is equal to 
// the target value.

// Input Format

// First line contains 2 integers: N and the target respectively.

// Second line contains N integers which are the elements of array.

// Constraints

// N<100

// Output Format

// Print one number which is number of such pairs.

// Sample Input 0

// 5 9
// 3 0 6 2 7
// Sample Output 0

// 2
// Explanation 0

// There are two such pairs available whose sum equals to  9. 

// Such pairs are (3,6) and (2,7)

// Hence the answer is 2



function processData(input) {
    cnt = 0
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    array1 = input.split('\n');
    // console.log('array1', array1);
    
    targetAndLength = array1[0];
    // console.log('firstArray', targetAndLength);
    // console.log('typeof firstArray', typeof targetAndLength);
    
    firstArray = targetAndLength.split(' ');
    // console.log('firstArray', firstArray);
    
    lengthOfArray = Number(firstArray[0]);
    // console.log('lengthOfArray', lengthOfArray);
    // console.log('typeof lengthOfArray', typeof lengthOfArray)
    
    targetInteger = Number(firstArray[1]);
    // console.log('targetInteger', targetInteger);
    // console.log('typeof targetInteger', typeof targetInteger);
    
    Integerz = array1[1];
    // console.log('Integerz', Integerz[2]);
    // console.log('typeof Integerz', typeof Integerz);
    
    finalIntegers = Integerz.split(' ').map(Number);
//     console.log('finalIntegers', finalIntegers);
//     console.log('typeof finalIntegers', typeof finalIntegers[1]);
    
//     console.log('finalIntegers[0]', finalIntegers[1]);
    
    
    for ( index = 0; index < lengthOfArray; index++ ) {
//         // console.log(index);
        for ( jIndex = index + 1; jIndex < lengthOfArray; jIndex++) {
            // console.log(index + ' ' + jIndex);
            if ( Number(finalIntegers[index]) + Number(finalIntegers[jIndex]) === targetInteger) {
//                 console.log(index + ' ' + jIndex);

                 cnt = cnt + 1;
            }
        }
    }
    
    console.log(cnt);
    

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
