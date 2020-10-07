// TC - O(N2 + N)
function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  //   console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  let obj = {};

  for (let i = 0; i < n; i++) {
    let sum = 0,
      length = 0;
    for (let j = i; j < n; j++) {
      sum = sum + arr[j];
      length++;
    }

    if (sum % k !== 0) {
      if (obj[length]) obj[length]++;
      else obj[length] = 1;
    }
  }

  let longest = Math.max(...Object.keys(obj));
  //   console.log("longest", longest)

  console.log(obj[longest]);

  //   console.log(obj)
}

runProgram("4 3\n2 3 4 6");
