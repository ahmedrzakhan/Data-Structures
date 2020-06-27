function processData(input) {
  //Enter your code here
  input = input.split("\n");
  var numberOfTestCases = Number(input[0]);
  var line = 1;

  for (var i = 1; i <= numberOfTestCases; i++) {
    var numberOfElements = Number(input[line]);
    // console.log("numberOfElements", numberOfElements);
    line = line + 1;
    var givenArray = input[line].split(" ").map(Number);
    // console.log(givenArray);

    var result = createNewArray(givenArray);
    // console.log("result", result);
    line = line + 1;
  }
}

var createNewArray = function (givenArray) {
  var firstArray = [],
    secondArray = [];

  for (var i = 0; i < givenArray.length; i++) {
    firstArray[i] = givenArray[i] + i;
    secondArray[i] = givenArray[i] - i;
  }
  // console.log("firstArray", firstArray);
  // console.log("secondArray", secondArray);
  var minAndMax = findMiniMax(firstArray, secondArray);
  // return givenArray;
};

var findMiniMax = function (firstArray, secondArray) {
  var min1 = firstArray[0];
  var max1 = firstArray[0];

  for (var i = 1; i < firstArray.length; i++) {
    if (firstArray[i] < min1) {
      min1 = firstArray[i];
    } else if (firstArray[i] > max1) {
      max1 = firstArray[i];
    }
  }
  // console.log("min1, max1", min1, max1);
  var result1 = max1 - min1;
  // console.log("result1", result1);
  var min2 = secondArray[0];
  var max2 = secondArray[0];

  for (var i = 1; i < secondArray.length; i++) {
    if (secondArray[i] < min2) {
      min2 = secondArray[i];
    } else if (secondArray[i] > max2) {
      max2 = secondArray[i];
    }
  }
  // console.log("min2, max2", min2, max2);
  var result2 = max2 - min2;
  // console.log("result2", result2);
  var finalResult = Math.max(result1, result2);
  console.log(finalResult);
};
