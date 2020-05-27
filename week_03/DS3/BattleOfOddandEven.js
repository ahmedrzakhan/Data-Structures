// You are given an array A of N integers. Your task is to write a programme that prints 
// "Odd" (without quotes) if the sum of all odd numbers present in the array is greater 
// than sum of all the even numbers present in the array. In all other cases, print 
// "Even" (without quotes).

// Input Format

// First line contains N which is the number of elements present in the array.

// Second line contains N space separated integers which are the elements of array.

// Constraints

// N<100

// Output Format

// Print either "Odd" or "Even" depending upon the condition mentioned above.

// Sample Input 0

// 4
// 1 2 3 4
// Sample Output 0

// Even
// Explanation 0

// Odd numbers present are 1 and 3, whose sum is 4

// Even numbers present in array are 2 and 4, whose sum is 6

// Since 6>4, Even is the required output.



function processData(input) {
    sumOfOddNumbers= 0 ;
    sumOfEvenNumbers = 0
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    arrayForString = input.split('\n');
    // console.log('arrayForString', arrayForString);
    
    numberOfElements = arrayForString[0];
    // console.log('numberOfElements', numberOfElements);
    // console.log('typeof numberOfElements', typeof numberOfElements);

    
    elementsOfArray = arrayForString[1];
    // console.log('elementsOfArray', elementsOfArray);
    // console.log('typeof elementsOfArray', typeof elementsOfArray);
    
    individualElements = elementsOfArray.split(' ');
    // console.log('individualElements', individualElements);
    // console.log('typeof individualElements', typeof individualElements);
    
    // console.log('individualElements[0]', individualElements[0]);
    // console.log('typeof individualElements[0]', typeof Number(individualElements[0]));
    
    splitNumberOfElements = numberOfElements.split(' ');
    // console.log('splitNumberOfElements', splitNumberOfElements);
    // console.log('typeof splitNumberOfElements', typeof Number(splitNumberOfElements));
    
    // console.log('Number(splitNumberOfElements)', Number(splitNumberOfElements));
    
    
    for (i = 0; i < Number(numberOfElements); i++) {
        // console.log('Number(individualElements[i])', Number(individualElements[i]));
        
        if ( Number(individualElements[i]) % 2 === 0 ) {
            // console.log('Number(individualElements[i]) % 2', Number(individualElements[i]));
            sumOfEvenNumbers += Number(individualElements[i]);
            // console.log('sumOfEvenNumbers', sumOfEvenNumbers);
        } else {
         sumOfOddNumbers += Number(individualElements[i]);
        // console.log('sumOfOddNumbers', sumOfOddNumbers);
        }
    }
    
    if (sumOfOddNumbers > sumOfEvenNumbers) {
        console.log("Odd");
    } else {
        console.log('Even');
    }
   
} 

// Sample Input
// 4
// 1 2 3 4