// You are given a number N. Let us say the floor of 32 divided by N is x

// Print as per following rules

// In case x is 0, print "Too Low"
// In case it is not possible to generate a valid number, print -1
// In all other cases, print x
// Input Format

// First line contains N

// Constraints

// N <= 100

// Output Format

// Output string or number based on the conditions mentioned above

// Sample Input 0

// 4
// Sample Output 0

// 8


function processData(input) {
    //Enter your code here
    var x;
    
    input = Number(input); 
    
    if (input === 0) {
        console.log(-1);
        return
    }
    
    x = Math.floor(32 / input)
    if (x === 0) {
        console.log("Too Low")
    } else {
        console.log(x)
        }
} 