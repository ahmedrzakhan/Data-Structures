// Noddy has an exam in which each question has a difficulty level in the form of an Integer. 
// Now, Noddy can only solve the problems that have difficulty level less than X . Now the 
// rules are-

// Score of the student is equal to the maximum number of answers he/she has attempted without 
// skipping a question.

// Student is allowed to skip just "one" question that will not be counted in the continuity of
//  the questions.
// Note- Assume the student knows the solution to the problem he/she attempts and always starts 
// the paper from first question.

// Given the number of Questions, N ,the maximum difficulty level of the problem Noddy can solve ,
//  X ,and the difficulty level of each question in the form of an array

// Determine the maximum score that Noddy can score?

// Input Format

// First Line contains Integer N , the number of questions and the maximum difficulty X 
// Noddy can solve.

// Next line contains N integers, denoting the difficulty level of each question.

// Constraints

// N <= 100000

// X <= 1000000000

// Difficulty level of each question <= 1000000000

// Output Format

// Print the maximum score that Noddy can score

// Sample Input 0

// 7 6
// 4 3 7 6 7 2 2
// Sample Output 0

// 3
// Explanation 0

// In this example, maximum difficulty = 6, Noddy solves question 0 and 1, but skips 
// the question 2 as A[2]>6. Monk then solves the question 3 , but stops at 4 because A[4]>6 
// and question 2 was already skipped. As 3 questions (0,1 and 3) were solved and 2 questions 
// (2 and 4) have been skipped, therefore we print "3".



function processData(input) {
    var maxScore = 0, numberOfQuestion, difficultyLevel, allowedToSkip = 0;
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    array1 = input.split('\n');
    // console.log('array1', array1);
    
    array2 = array1[0].split(' ');
    // console.log('array2', array2);
    
    numberOfQuestion = array2[0];
    // console.log('numberOfQuestion', numberOfQuestion);
    
    difficultyLevel = array2[1];
    // console.log('difficultyLevel', difficultyLevel);
    
    difficultyLevelOfQuestions = array1[1].split(' ').map(Number);;
    // console.log('difficultyLevelOfQuestions', difficultyLevelOfQuestions);
    // console.log('typeof difficultyLevelOfQuestions', typeof difficultyLevelOfQuestions);
    // console.log('difficultyLevelOfQuestions[3]', difficultyLevelOfQuestions[3]);
    
    var i = 0;
    
    while ( i < numberOfQuestion ) { 
        // console.log('i', i);
        if ( difficultyLevelOfQuestions[i] > difficultyLevel) {
            // console.log('i, difficultyLevelOfQuestions[i]', i, difficultyLevelOfQuestions[i]);
            allowedToSkip = allowedToSkip + 1;
            // console.log('allowedToSkip', allowedToSkip);
            
            if ( allowedToSkip > 1 ) {
                break;
            }
        } else if ( difficultyLevelOfQuestions[i] <= difficultyLevel) {
            // console.log('maxScore', i);
            maxScore = maxScore + 1;
        }
        
        i++;
    }
                console.log( maxScore );

} 