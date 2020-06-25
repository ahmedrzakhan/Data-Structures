function processData(input) {
  //Enter your code here
  input = input.split("\n");

  var numberOfElements = Number(input[0]);
  var givenArray = input[1].split(" ").map(Number);

  // console.log( numberOfElements, givenArray );

  for (var i = 0; i < numberOfElements - 1; i++) {
    for (var j = 0; j < numberOfElements - i - 1; j++) {
      if (givenArray[j] > givenArray[j + 1]) {
        var temp = givenArray[j];
        givenArray[j] = givenArray[j + 1];
        givenArray[j + 1] = temp;
      }
    }
  }

  console.log(givenArray.join(" "));
}
processData("5\n3 5 0 9 8");
