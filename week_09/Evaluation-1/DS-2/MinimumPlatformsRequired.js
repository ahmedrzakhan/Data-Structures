// Given arrival and departure times of all trains that reach a railway station, the task is 
// to find the minimum number of platforms required for the railway station so that no train waits.

// Input Format

// First line contains number of trains n

// Second line contains array containing arrival time of n trains

// Third line contains array containing departure time of n trains

// Constraints

// n <= 100

// Output Format

// Output one number which is the minimum number of platforms required

// Sample Input 0

// 6
// 9:00 9:40 9:50 11:00 15:00 18:00
// 9:10 12:00 11:20 11:30 19:00 20:00
// Sample Output 0

// 3
// Explanation 0

// Time Event Type Total Platforms Needed at this Time
// 9:00 Arrival 1 9:10 Departure 0 9:40 Arrival 1 9:50 Arrival 2 11:00 Arrival 3 11:20 Departure 
// 2 11:30 Departure 1 12:00 Departure 0 15:00 Arrival 1 18:00 Arrival 2 19:00 Departure 1 20:00 
// Departure 0

// Minimum Platforms needed on railway station = Maximum platforms needed at any time = 3


function processData(input) {
    //Enter your code here
    input = input.split("\n");

    var numberOfTrains = Number(input[0]);
    // console.log("numberOfTrains", numberOfTrains);

    var arrivalTimes = input[1].split(" ");
    // console.log("arrivalTimes", arrivalTimes);

    var departureTimes = input[2].split(" ");
    // console.log("departureTimes", departureTimes);

    var tempArrival = [],
        tempDeparture = [];

    for (var i = 0; i < numberOfTrains; i++) {
        tempArrival.push(Number(arrivalTimes[i].split(":").join("")));
        tempDeparture.push(Number(departureTimes[i].split(":").join("")));
    }

    var result = 1;

    // console.log("tempArrival", tempArrival);
    // console.log("tempDeparture", tempDeparture);

    for (var i = 0; i < numberOfTrains; i++) {
        var platforms = 1;
        for (var j = i + 1; j < numberOfTrains; j++) {
            if (
                (tempArrival[i] >= tempArrival[j] &&
                    tempArrival[i] <= tempDeparture[j]) ||
                (tempArrival[j] >= tempArrival[i] && tempArrival[j] <= tempDeparture[i])
            ) {
                // console.log("tempArrival[i]", tempArrival[i], "i", i, "j", j, 
                // "tempArrival[j]", tempArrival[j]);
                platforms++;
            }
        }
        result = Math.max(result, platforms);
    }

    console.log(result);
}