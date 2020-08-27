function runProgram(input) {
  let arr = input.trim().split("");

  //   console.log("arr", arr);

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[0] === "?" && arr[1] === "a") {
      arr[0] = "b";
    } else if (arr[0] === "?" && arr[1] !== "a") {
      arr[0] = "a";
    }

    if (arr[i] === "?") {
      if (arr[i - 1] === "a" || arr[i + 1] === "a") {
        arr[i] = "b";
      } else {
        arr[i] = "a";
      }
    }

    if (arr[arr.length - 1] === "?" && arr[arr.length - 2] === "a") {
      arr[arr.length - 1] = "b";
    } else if (arr[arr.length - 1] === "?" && arr[arr.length - 2] === "b") {
      arr[arr.length - 1] = "a";
    }
  }

  console.log(arr.join(''));
}

runProgram("?ba??b");
