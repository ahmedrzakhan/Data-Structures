function runProgram(input) {
  let a = input.split(":");
//   console.log(a);

  let format = a[2];
//   console.log(format[2]);

  if (format[2] === "P") {
    checkP(a);
  } else {
    checkA(a);
  }
}

function checkP(a) {
  if (a[0] !== "12") {
    a[0] = (Number(a[0]) + 12).toString();
  }
  console.log(a.join(":").replace("PM", ""));
}

function checkA(a) {
  if (a[0] === "12") {
    a[0] = "00";
  }

  console.log(a.join(":").replace("AM", ""));
}

runProgram("07:05:45PM");
// runProgram("12:00:00AM");
