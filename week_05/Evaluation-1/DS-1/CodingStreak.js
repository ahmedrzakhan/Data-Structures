function processData(input) {
    //Enter your code here
    var maximumCountOfAllDays = 0;
    input = input.split('\n');
    
    var numberOfLines = Number(input[0]);
    // console.log("numberOfLines", numberOfLines);
    
    for ( var i = 1; i <= numberOfLines; i++ ) {
        givenArray = input[i].split('');
        // console.log("givenArray", givenArray);
        var allMaxCounts = longestCodingStreakOfDay(givenArray);
        
        if ( allMaxCounts ) {
            maximumCountOfAllDays = Math.max( maximumCountOfAllDays, allMaxCounts);
        }
    }
    
    // console.log("maximumCountOfAllDays", maximumCountOfAllDays);
    
    var allMaxContiuousDays = longestCodingStreakOfContinuesDays(input);
    
    console.log( maximumCountOfAllDays, allMaxContiuousDays);
    
    
} 

var longestCodingStreakOfContinuesDays = function( input ) {
    // console.log("input", input);
    
    var numberOfLines = Number(input[0]);
    // console.log("numberOfLines", numberOfLines);
    
    input.shift();
    // console.log("input", input);
    
    var joinedString = input.join('');
    // console.log("joinedString", joinedString);
    
    var maximumCountOfContinuousDays = longestCodingStreakOfDay(joinedString);
    
    // console.log("maximumCountOfContinuousDays", maximumCountOfContinuousDays);
    
    return maximumCountOfContinuousDays
    
} 

var longestCodingStreakOfDay = function (givenArray) {
    // console.log("givenArray", givenArray);
    var maxCount = 0, count = 0;
    
    var i = 0;
    
    while ( i < givenArray.length ) {
        // console.log(i);
        if ( givenArray[i] === 'C' ) {
            
            var current = givenArray[i];
            count = 1;
            var j = i + 1;

            while ( j <= givenArray.length ) {
                if ( current === givenArray[j] ) {
                    count = count + 1;
                } else {
                    i = j;
                    maxCount = Math.max(count, maxCount);
                    break;
                }
                j++;
            }     
        }
        i++;
        }
    // console.log("maxCount", maxCount);
    return maxCount;
}
