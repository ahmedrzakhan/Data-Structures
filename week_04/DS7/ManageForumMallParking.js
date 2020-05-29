// Assume forum mall has K parking slots and in the next 24 hours there are 
// many vehicles that are going to visit the mall. Luckily, you know the arrival 
// and departure time of each vehicle coming to visit the mall. You are the parking manager 
// of forum and you want to maintain the reputation of Forum mall. Since you know the arrival 
// and departure time of each vehicle and also number of parking slots that you have, comment 
// if it is possible to accomodate all vehicles or not.

// If it is possible, print "Possible"

// In case it is not possible, print "Not Possible"

// Input Format

// First line contains K

// Second line is an array which contains arrival time of all the vehicles coming to visit mall.
// (where element at i index represents arrival time for ith car)

// Third line is also an array which contains departure time of all the vehicles coming to visit mall.
// (where element at i index represents departure time for ith car)

// Constraints

// K<10000

// Number of cars<100000

// Output Format

// Output Possible/Not Possible based on condition mentioned above.

// Sample Input 0

// 1
// 1 3 5
// 2 6 8
// Sample Output 0

// Not Possible
// Explanation 0

// At 5, there are 2 vehicles for parking. But you have only one slot. 

// Hence the answer is "Not Possible"

function processData(input) {
    //Enter your code here
    
    var requiredSlots = 1, possibility = true;
    
    input = input.split('\n');
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    var parkingSlots = Number(input[0]);
    // console.log('parkingSlots', parkingSlots);
    
    var arrivalTime = input[1].split(' ').map(Number);
    // console.log('arrivalTime', arrivalTime);
    
    var depatureTime = input[2].split(' ').map(Number);
    // console.log('depatureTime', depatureTime);
    
    for ( var i = 0; i < arrivalTime.length; i++ ) {
        // console.log('i', i);
        if ( depatureTime[ i ] > arrivalTime[ i + 1 ] ) {
            requiredSlots = requiredSlots + 1; 
            
            if ( requiredSlots > parkingSlots ) {
                // console.log("Not Possible");
                possibility = false;
                break;
            } else {
                // console.log("Possible");
                possibility = true;
            }       
        }
    }
    
    if ( possibility ) {
        console.log("Possible");
    } else {
        console.log("Not Possible");
    }
}
