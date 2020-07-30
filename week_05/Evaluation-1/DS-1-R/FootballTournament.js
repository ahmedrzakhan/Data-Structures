// Masai School had hosted a Football tournamnent. You got hold of a profound
// description of the final match's process. On the whole there are n lines in
// that description each of which described one goal. Every goal was marked with
//  the name of the team that had scored it. Write a program to find the name of
//  the team that won the finals. It is guaranteed that the match did not end in a tie.

// Input Format

// The first line contains an integer n — the number of lines in the description.

// Then follow n lines — for each goal the names of the teams that scored it.

// Constraints

// 1 ≤ n ≤ 100

// The names are non-empty lines consisting of uppercase letters whose lengths do not
// exceed 10 symbols. It is guaranteed that the match did not end in a tie and the
// description contains no more than two different teams.

// Output Format

// Print the name of the winning team. We remind you that in football the team that
// scores more goals is considered the winner.

// Sample Input 0

// 5
// A
// ABA
// ABA
// A
// A
// Sample Output 0

// A

function processData(input) {
  //Enter your code here
  input = input.split("\n");

  // console.log("input", input);

  var numberOfGoals = Number(input[0]);
  // console.log("numberOfGoals", numberOfGoals);

  input.shift();

  var goalsArray = input;
  // console.log("goalsArray", goalsArray);

  var firstTeam = goalsArray[0];
  // console.log("firstTeam", firstTeam);

  for (var i = 0; i < numberOfGoals; i++) {
    if (goalsArray[i] !== firstTeam) {
      // // console.log("goalsArray[i]", goalsArray[i]);
      var secondTeam = goalsArray[i];
      break;
    }
  }

  // console.log("secondTeam", secondTeam);

  var goalsByFirstTeam = 0,
    goalsBySecondTeam = 0;

  for (var j = 0; j < numberOfGoals; j++) {
    if (goalsArray[j] === firstTeam) {
      goalsByFirstTeam = goalsByFirstTeam + 1;
    } else if (goalsArray[j] === secondTeam) {
      goalsBySecondTeam = goalsBySecondTeam + 1;
    }
  }

  // console.log( "goalsByFirstTeam goalsBySecondTeam", goalsByFirstTeam, goalsBySecondTeam );

  if (goalsByFirstTeam > goalsBySecondTeam) {
    console.log(firstTeam);
  } else {
    console.log(secondTeam);
  }
}
