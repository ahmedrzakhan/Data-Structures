// You are provided an array A which has N elements. Your task is to find the 
// count of such occurrence where the element is larger than its neighbour.

// Input Format

// First line of input contains N which is the number of elements present in the array.

// Second line contains N integer which are the elements of the array A.

// Constraints

// N<100

// There will always be at least 2 elements

// Output Format

// Output one integer which is the count of such occurences.

// Sample Input 0

// 8
// 1 2 3 4 2 1 6 5
// Sample Output 0

// 2
// Explanation 0

// In this case, 4 is bigger than both its neighbour 3 and 2. Similarly 6 is bigger 
// than both its neighbour 5 and 1. So, the answer is 2.



function processData(input) {
    cnt = 0
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    string1 = input.split('\n');
    // console.log('string1', string1);
    
    numberOfElements = string1[0];
    // console.log('numberOfElements', numberOfElements)
    // console.log('Number(numberOfElements)', typeof Number(numberOfElements))
    
    individualElements = string1[1];
    // console.log('individualElements', individualElements)
    
    element = individualElements.split(' ');
    // console.log(element);
    
    lengthOfElements = element.length;
    // console.log('lengthOfElements', lengthOfElements)
    
    
    // console.log('element.length', element.length - 1)
    // console.log('typeof element.length', typeof element.length)

    if (Number(element[0]) > Number(element[1])) {
        cnt += 1;
        // console.log(element[0]);
    }
    
    
    if (Number(element[lengthOfElements - 1]) > Number(element[lengthOfElements - 2])) {
        cnt += 1;
        // console.log('element[lengthOfElements - 1]', element[lengthOfElements - 1]);
    }
    
    for ( i = 1; i < Number(lengthOfElements) - 1; i++) {
        if (Number(element[i]) > Number(element[i - 1]) && Number(element[i]) > Number(element[i + 1])) {
            cnt += 1;
            // console.log('element[i]', element[i])
        }
    }
    
    console.log(cnt);

            // console.log('element[lengthOfElements - 1]', lengthOfElements - 2);
} 
