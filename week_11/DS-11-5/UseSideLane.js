function processData(input) {
    var input = input.trim().split("\n");
    // console.log("input", input);
  
    var line = 0;
  
    for (var i = 0; i < input.length; i++) {
      var numberOfItems = Number(input[line]);
      line++;
  
      var arr = input[line].trim().split(" ").map(Number);
      // console.log("arr", arr);
  
      var answer = sideLane(arr);
      console.log(answer);
  
      line++;
  
      if (input[line] === "0") {
        break;
      }
    }
  }
  
  var sideLane = function (arr) {
    var stack = [],
      expected = 1,
      i = 0;
  
    while (expected <= arr.length) {
      if (arr[i] === expected) {
        i++;
        expected++;
      } else {
         if (stack[stack.length - 1] < arr[i] && stack.length !== 0) {
          return "no";
        } else {
          stack.push(arr[i]);
          i++;
        }
      }
      while (stack[stack.length - 1] === expected && stack.length !== 0) {
        stack.pop();
        expected++;
      }
    }
    return "yes";
  };
  