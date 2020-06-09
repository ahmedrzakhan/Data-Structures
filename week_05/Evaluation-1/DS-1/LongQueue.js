// There is a long queue of people in front of ATMs. Due to withdrawal limit 
// per person per day, people come in groups to withdraw money.

// Groups come one by one and line up behind the already present queue. The 
// groups have a strange way of arranging themselves. In a particular group, 
// the group members arrange themselves in increasing order of their height(not
//      necessarily strictly increasing). Effectively, all people who have lined
//       up in increasing order of height form one group
// Find the minimum number of groups that can be observed in the queue?

// Input Format

// The first line of input contains one positive integer N. The second line contains
//  N space-separated integers H[i] denoting the height of i-th person. Each group
//   has group members standing in increasing order of their height.

// Constraints

// N <= 1000000

// H[i] <= 1000000

// Output Format

// Print the minimum number of groups that are at least present in the queue?

// Sample Input 0

// 6
// 1 2 4 3 5 8
// Sample Output 0

// 2

function processData(input) {
    //Enter your code here
    input = input.split("\n");
    
    var  numberOfPeople = Number(input[0]);
    
    var givenArray = input[1].split(" ").map(Number);
    
    var  count = 1;
    
    for ( var  i = 1; i < numberOfPeople; i++ ) {
        
        if ( givenArray[i-1] > givenArray[i] ) {
            
            count = count + 1;
        }
    }
    
    console.log(count);
    
} 
processData('8\n1 2 4 3 5 8 2 4')