// You are given a 3*3 matrix (2 dimensional array) that represents the final situation
// of a Tic Tac Toe.

// You task is to write a program that finds out the winner in case the match ended in a
//  win. If the winner is 'x', print 'x'(without quotes).

// If the winner is 'o', print 'o' (without quotes)

// In case the match ended in a tie, print "Tie" (without quotes)
// Input Format

// Input contains 3 lines where each line has 3 space separated characters which represents
//  final status of tic tac toe

// Constraints

// Input contains either of the 2 alphabets: 'x' and 'o'

// Output Format

// Print Tie/x/o depending on the end result of game

// Sample Input 0

// x o x
// o x x
// o o o
// Sample Output 0

// o

function processData(input) {
  //Enter your code here
  var matrix = [];
  input = input.split("\n");
  // console.log('input', input);

  //     var row = input[0].split(' ');
  //     console.log('row', row);

  //     var rowCol = row[0];
  //     console.log('rowCol', rowCol);

  // if ( row[0] === 'x') {
  //     console.log('opop')
  // }

  for (var i = 0; i < 3; i++) {
    var row = input[i].split(" ");
    matrix.push(row);
  }
  // console.log('matrix', matrix);

  checkDiagonals(matrix);

  checkColumns(matrix);

  checkRows(matrix);
}

var checkDiagonals = function (matrix) {
  var primaryDiagonal = "";
  for (var diagPD = 0; diagPD < matrix.length; diagPD++) {
    for (var diagPDJ = 0; diagPDJ < matrix.length; diagPDJ++) {
      if (diagPD === diagPDJ) {
        primaryDiagonal = primaryDiagonal + matrix[diagPD][diagPDJ];
      }
    }
  }
  // console.log('primaryDiagonal', primaryDiagonal);

  if (primaryDiagonal === "xxx") {
    console.log("x");
  } else if (primaryDiagonal === "ooo") {
    console.log("o");
  }

  var secondaryDiagonal = "";
  for (var diagSD = 0; diagSD < matrix.length; diagSD++) {
    for (var diagSDJ = 0; diagSDJ < matrix.length; diagSDJ++) {
      if (diagSD + diagSDJ === matrix.length - 1) {
        secondaryDiagonal = secondaryDiagonal + matrix[diagSD][diagSDJ];
      }
    }
  }
  // console.log('secondaryDiagonal', secondaryDiagonal);

  if (secondaryDiagonal === "xxx") {
    console.log("x");
  } else if (secondaryDiagonal === "ooo") {
    console.log("o");
  }
};

var checkColumns = function (matrix) {
  var firstColumn = "";
  for (var FC = 0; FC < matrix.length; FC++) {
    for (var FCJ = 0; FCJ < matrix.length; FCJ++) {
      if (FCJ === 0) {
        firstColumn = firstColumn + matrix[FC][FCJ];
      }
    }
  }
  // console.log('firstColumn', firstColumn);

  if (firstColumn === "xxx") {
    console.log("x");
  } else if (firstColumn === "ooo") {
    console.log("o");
  }

  var secondColumn = "";
  for (var SC = 0; SC < matrix.length; SC++) {
    for (var SCJ = 0; SCJ < matrix.length; SCJ++) {
      if (SCJ === 1) {
        secondColumn = secondColumn + matrix[SC][SCJ];
      }
    }
  }
  // console.log('secondColumn', secondColumn);
  if (secondColumn === "xxx") {
    console.log("x");
  } else if (secondColumn === "ooo") {
    console.log("o");
  }

  var thirdColumn = "";
  for (var TC = 0; TC < matrix.length; TC++) {
    for (var TCJ = 0; TCJ < matrix.length; TCJ++) {
      if (TCJ === 2) {
        thirdColumn = thirdColumn + matrix[TC][TCJ];
      }
    }
  }
  // console.log('thirdColumn', thirdColumn);
  if (thirdColumn === "xxx") {
    console.log("x");
  } else if (thirdColumn === "ooo") {
    console.log("o");
  }
};

var checkRows = function (matrix) {
  var firstRow = "";
  for (var FR = 0; FR < matrix.length; FR++) {
    for (var FRJ = 0; FRJ < matrix.length; FRJ++) {
      if (FR === 0) {
        firstRow = firstRow + matrix[FR][FRJ];
      }
    }
  }
  // console.log('firstRow', firstRow);

  if (firstRow === "xxx") {
    console.log("x");
  } else if (firstRow === "ooo") {
    console.log("o");
  }

  var secondRow = "";
  for (var SR = 0; SR < matrix.length; SR++) {
    for (var SRJ = 0; SRJ < matrix.length; SRJ++) {
      if (SR === 1) {
        secondRow = secondRow + matrix[SR][SRJ];
      }
    }
  }
  // console.log('secondRow', secondRow);
  if (secondRow === "xxx") {
    console.log("x");
  } else if (secondRow === "ooo") {
    console.log("o");
  }

  var thirdRow = "";
  for (var TR = 0; TR < matrix.length; TR++) {
    for (var TRJ = 0; TRJ < matrix.length; TRJ++) {
      if (TR === 2) {
        thirdRow = thirdRow + matrix[TR][TRJ];
      }
    }
  }
  // console.log('thirdRow', thirdRow);
  if (thirdRow === "xxx") {
    console.log("x");
  } else if (thirdRow === "ooo") {
    console.log("o");
  }
};
