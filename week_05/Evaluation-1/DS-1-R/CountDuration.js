// Given 4 variables SH,SM,EH and EM each separated by space(SH=starting 
//     hr, SM=starting min, EH=ending hr, EM=ending min), calculate and 
//     print the difference betwee the two times

// Input Format

// First line will be given by N test cases

// Next N line will be given SH,SM,EH and EM  each separated by space(SH=
//     starting hr,
//               SM=starting min, EH=ending hr, EM=ending min)
// Constraints

// N < 100

// Output Format

// N lines with duration HH MM(hours and minutes separated by space)
// Sample Input 0

// 2
// 1 44 2 14
// 2 42 8 23
// Sample Output 0

// 0 30
// 5 41


function processData(input) {
    //Enter your code here
    
    input = input.split('\n');
    var numberOfTestCases = input[0];
    // console.log("numberOfTestCases", numberOfTestCases)
    
    input.shift();
    
    for ( var i = 0; i < numberOfTestCases; i++ ) {
        givenArray = input[i].split(' ').map(Number);
        // console.log("givenArray", givenArray)
        
        var StartingHour = givenArray[0];
        // console.log("StartingHour", StartingHour)
        
        var StaringMinute = givenArray[1];
        // console.log("StaringMinute", StaringMinute)
        
        var EndingHour = givenArray[2];
        // console.log("EndingHour", EndingHour)
        
        var EndingMinute = givenArray[3];
        // console.log("EndingMinute", EndingMinute)
        
        var TotalSumofStartingMinutes = StartingHour * 60 + StaringMinute;
        // console.log("TotalSumofStartingMinutes", TotalSumofStartingMinutes);
        
        var TotalSumofEndingMinute = EndingHour * 60 + EndingMinute;
        // console.log("TotalSumofEndingMinute", TotalSumofEndingMinute);
        
        var diff = TotalSumofEndingMinute - TotalSumofStartingMinutes;
        // console.log("diff", diff);
        
        var diffHour = Math.floor( diff / 60 );
        // console.log("diffHour", diffHour);
        
        var diffMins = diff % 60;
        // console.log("diffMins", diffMins);
        
        console.log(diffHour, diffMins)   
    }
} 