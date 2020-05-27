// ICPC is International Collegiate Programming Contest is an algorithmic programming 
// contest for college students. You are provided list of countries in correct ranking. 
// Your task is to write a program that prints the rank of India in ICPC.

// Input Format

// First line contains N which is number of countries.

// Next N line contains names of N countries in the order of their ranking.

// Constraints

// N<1000

// Output Format

// Output one number which is rank of India in ICPC

// Sample Input 0

// 5
// Russia
// USA
// Japan
// China
// India
// Sample Output 0

// 5
// Explanation 0

// Out of the 5 countries, India is at 5th place. Hence, output is 5


function processData(input) {
    //Enter your code here
    // console.log('input', input);
    
    array1 = input.split('\n');
    // console.log('array1', array1);
    // console.log('typeof array1', typeof array1);
    
    lengthOfArray1 = array1.length;
    // console.log('lengthOfArray1', lengthOfArray1);
    
    numberOfCountries = Number(array1[0]);
    // console.log('numberOfCountries', numberOfCountries);
    // console.log('typeof numberOfCountries', typeof numberOfCountries);
    
    countries = array1[1];
    // console.log('countries', countries);
    
    for ( var index = 1; index < lengthOfArray1; index++ ) {
        // console.log(index);
        if ( array1[ index ] === 'India') {
            console.log( index );
        }
    }
    
} 