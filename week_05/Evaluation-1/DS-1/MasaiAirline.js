function processData(input) {
  //Enter your code here

  input = input.split("\n");

  var numberOfPeople = Number(input[0]);
  // console.log("numberOfPeople", numberOfPeople);

  var weightOfCheckInBags = input[1].split(" ").map(Number);
  // console.log("weightOfCheckInBags", weightOfCheckInBags);

  var weightOfHandBags = input[2].split(" ").map(Number);
  // console.log("weightOfHandBags", weightOfHandBags);

  for (var i = 0; i < numberOfPeople; i++) {
    if (weightOfCheckInBags[i] > 15 || weightOfHandBags[i] > 7) {
      console.log("Stop");
    } else {
      console.log("Boarding");
    }
  }
}
