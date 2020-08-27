function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);

  let position = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let rooms = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  //   console.log(n, position, rooms);

  let time = position.map((ele, index) => Math.abs(ele - rooms[index]));

  //   console.log("time", time);

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < rooms.length; i++) {
    if (time[i] > max) {
      max = time[i];
    }
  }

  console.log(max);
}

runProgram("3\n4 -4 2\n4 0 7");
