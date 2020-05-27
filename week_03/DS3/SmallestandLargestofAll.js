// Given an array, A, of N integers, print the smallest and largest element present 
// in the array

// **YOU MUST NOT USE ANY BUILT-IN FUNCTION **
// Input Format

// The first line contains an integer, N (the number of integers in A). 
// The second line contains N space separated integers describing A.

// Constraints

// N<100

// Output Format

// Print 2 integers in different lines where first integer represents the 
// minimum of all elements and second integer represents the maximum of all

// Sample Input 0

// 4
// -2 0 8 4
// Sample Output 0

// -2
// 8



function processData(input) {
    //Enter your code here
    smallestNumber = 9999;
    largestNumber = -9999;
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

        // smallestNumber = Number(individualElements[0]);
        // largestNumber = Number(individualElements[0]);

    for (i = 0; i < Number(numberOfElements); i++) {
        // console.log('Number(individualElements[i])', Number(individualElements[i]));
        
        
        if ( smallestNumber > Number(individualElements[i])) {
            // console.log('Number(individualElements[i]) % 2', Number(individualElements[i]));
            smallestNumber = Number(individualElements[i]);
        } 
        
        if ( largestNumber < Number(individualElements[i])) {
         largestNumber = Number(individualElements[i]);
        }
    }
                
    console.log(smallestNumber);
    console.log(largestNumber);

} 