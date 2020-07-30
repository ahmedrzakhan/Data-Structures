// For last N days, you did nothing but eat, sleep and code.

// A close friend of you kept an eye on you for last N days. For every
// single minute of the day, he kept track of your actions and prepared a log file.

// The log file contains exactly N lines, each line contains a string of
// length 1440 ( i.e. number of minutes in 24 hours of the day). The string
// is made of characters E, S, and C only; representing Eat, Sleep and Code
// respectively. ith character of the string represents what you were doing
// during ith minute of the day.

// Your friend is now interested in finding out the maximum of longest
//  coding streak of the day - X. He also wants to find the longest coding
//   streak of N days - Y. Coding streak means number of C's without any E
//   or S in between.

// See sample test case for clarification.

// Input Format

// First line of each file contains N - number of days.

// Following N lines contains a string of exactly 1440 length representing
// his activity on that day.

// Constraints

// 1 ≤ N ≤ 365

// String consists of characters E, S, and C only.

// String length is exactly 1440.

// Note: The sample test case does not follow the given constraints on
// string length to avoid large data. It is meant only for explanation.
//  We assure you that the hidden test files strictly follow the constraints.

// Output Format

// Print X and Y separated by a space in a single line.

// Sample Input 0

// 4
// SSSSEEEECCCCEECCCC
// CCCCCSSSSEEECCCCSS
// SSSSSEEESSCCCCCCCS
// EESSSSCCCCCCSSEEEE
// Sample Output 0

// 7 9
// Explanation 0

// Longest coding streak for each day is as follows:
// Day 1: 4
// Day 2: 5
// Day 3: 7
// Day 4: 6
// Maximum of these is 7, hence X is 7.
// ** Now in order to find longest coding streak of the all days, we should
// also check if you continued your coding from previous days. **

//    As in the sample test case, you were coding for 4 minutes at the end of
//    Day 1 and you continued to code till 5 more minutes on Day 2. Hence the l
//    ongest coding streak is 4+5 equals 9. There is no any other coding streak
//    larger than this. So the longest coding streak of all days is 9.

function processData(input) {
  //Enter your code here
  var maximumCountOfAllDays = 0;
  input = input.split("\n");

  var numberOfLines = Number(input[0]);
  // console.log("numberOfLines", numberOfLines);

  for (var i = 1; i <= numberOfLines; i++) {
    givenArray = input[i].split("");
    // console.log("givenArray", givenArray);
    var allMaxCounts = longestCodingStreakOfDay(givenArray);

    if (allMaxCounts) {
      maximumCountOfAllDays = Math.max(maximumCountOfAllDays, allMaxCounts);
    }
  }

  // console.log("maximumCountOfAllDays", maximumCountOfAllDays);

  var allMaxContiuousDays = longestCodingStreakOfContinuesDays(input);

  console.log(maximumCountOfAllDays, allMaxContiuousDays);
}

var longestCodingStreakOfContinuesDays = function (input) {
  // console.log("input", input);

  var numberOfLines = Number(input[0]);
  // console.log("numberOfLines", numberOfLines);

  input.shift();
  // console.log("input", input);

  var joinedString = input.join("");
  // console.log("joinedString", joinedString);

  var maximumCountOfContinuousDays = longestCodingStreakOfDay(joinedString);

  // console.log("maximumCountOfContinuousDays", maximumCountOfContinuousDays);

  return maximumCountOfContinuousDays;
};

var longestCodingStreakOfDay = function (givenArray) {
  // console.log("givenArray", givenArray);
  var maxCount = 0,
    count = 0;

  var i = 0;

  while (i < givenArray.length) {
    // console.log(i);
    if (givenArray[i] === "C") {
      var current = givenArray[i];
      count = 1;
      var j = i + 1;

      while (j <= givenArray.length) {
        if (current === givenArray[j]) {
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
};
