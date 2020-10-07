function runProgram(expenditure, d) {
  console.log(expenditure);
  console.log(d);

  let n = expenditure.length;

  const getMedian = (stop, d) => {

    let arr = [];

    let reversed = expenditure.reverse();

    for (let i = 0; i < stop; i++) {
      arr.push(reversed[i]);
    }
    console.log("arr", arr);
  };

  for (let i = d; i < n; i++) {
    let median = getMedian(i, d);
    console.log("median", median);
  }
}

runProgram([10, 20, 30, 40, 50], 3);
