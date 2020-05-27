// You are given 3 parameters of two different cricket teams in World Cup Final.

// First parameter : Score

// Second parameter : Score in super over

// Third parameter : Total number of fours scored in the inning.

// If first parameter of any one team is greater than other then that team wins.

// If first parameter of both the teams are same, then the team whose second parameter 
// is greater wins the match.

// In case the second parameter is also same, then the team that has higher value of 
// third parameter wins the game.

// Input Format

// First line contains the three discussed parameter for New Zealand

// Second line contains three discussed parameters for England

// Constraints

// All parameters < 10000

// Output Format

// Output "England" (without quotes) if England wins the game, else print 
// "New Zealand" if New Zealand wins the game.

// Sample Input 0

// 241 15 21
// 241 15 26
// Sample Output 0

// England


function processData(input) {
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    array1 = input.split('\n');
    // console.log('array1', array1);
    
    firstArray = array1[0];
    // console.log('firstArray', firstArray);
    // console.log('typeof firstArray', typeof firstArray);
    
    secondArray = array1[1];
    // console.log('secondArray', secondArray);
    // console.log('typeof secondArray', typeof secondArray);
    
    allScoresTeam1 = firstArray.split(' ').map(Number);
    // console.log('allScoresTeam1', allScoresTeam1);
    
    allScoresTeam2 = secondArray.split(' ').map(Number);
    // console.log('allScoresTeam2', allScoresTeam2);
    
    scoreTeam1 = allScoresTeam1[0];
    // console.log('scoreTeam1', scoreTeam1);
    
    scoreTeam2 = allScoresTeam2[0];
    // console.log('scoreTeam2', scoreTeam2);
    
    scoreInSuperOverTeam1 = allScoresTeam1[1];
    // console.log('scoreInSuperOverTeam1', scoreInSuperOverTeam1);

    scoreInSuperOverTeam2 = allScoresTeam2[1];
    // console.log('scoreInSuperOverTeam2', scoreInSuperOverTeam2);
    
    totalBoundariesTeam1 = allScoresTeam1[2];
    // console.log('totalBoundariesTeam1', totalBoundariesTeam1);
    
    totalBoundariesTeam2 = allScoresTeam2[2];
    // console.log('totalBoundariesTeam2', totalBoundariesTeam2);
    
    if ( scoreTeam1 > scoreTeam2 ) {
        console.log("New Zealand");
    } else if ( scoreTeam1 < scoreTeam2 ) {
        console.log("England")
    } else if ( scoreTeam1 === scoreTeam2 && scoreInSuperOverTeam1 > scoreInSuperOverTeam2 ) {
        console.log("New Zealand");
    } else if ( scoreTeam1 === scoreTeam2 && scoreInSuperOverTeam1 < scoreInSuperOverTeam2 ) {
        console.log("England");
    } else if ( scoreTeam1 === scoreTeam2 && scoreInSuperOverTeam1 === scoreInSuperOverTeam2 && totalBoundariesTeam1 > totalBoundariesTeam2) {
        console.log("New Zealand");
} else if ( scoreTeam1 === scoreTeam2 && scoreInSuperOverTeam1 === scoreInSuperOverTeam2 && totalBoundariesTeam1 < totalBoundariesTeam2) {
        console.log("England");

}
}