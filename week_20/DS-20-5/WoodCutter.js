// Wood Cutter
// Description

// Lumberjack Bob needs to chop down M metres of wood. However, Bob is only allowed to cut
//  a single row of trees.

// Bob's machine works as follows: Bob sets a height parameter H (in metres), and the
// machine raises a giant sawblade to that height and cuts off all tree parts higher than
//  H (of course, trees not higher than H meters remain intact). Bob then takes the parts
//   that were cut off.

// For example, if the tree row contains trees with heights of 20, 15, 10, and 17 metres,
// and Bob raises his sawblade to 15 metres, the remaining tree heights after cutting will
//  be 15, 15, 10, and 15 metres, respectively, while Bob will take 5 metres off the first
//  tree and 2 metres off the fourth tree (7 metres of wood in total).

// Bob is ecologically minded, so he doesn‟t want to cut off more wood than necessary. That‟s
// why he wants to set his sawblade as high as possible. Help Bob find the maximum integer
// height of the sawblade that still allows him to cut off at least M metres of wood.

// Input
// Input Format

// The first line of input contains two space-separated positive integers, N (the number
//     of trees) and M (Bob‟s required wood amount).
// The second line of input contains N space-separated positive integers less than 1 000
// 000 000, the heights of each tree (in metres). The sum of all heights will exceed M,
// thus Bob will always be able to obtain the required amount of wood.
// Constraints

// 1 ≤ N ≤ 1 000 000

// 1 ≤ M ≤ 2 000 000 000

// Output
// Output Format

// The first and only line of output must contain the required height setting.

// Sample Input 1

// 4 7
// 20 15 10 17
// Sample Output 1

// 15

// TC - O(NLog N)
function runProgram(input) {
  input = input.split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  //   console.log("n, k", n, k);

  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  //   console.log("arr", arr);

  let lo = arr[0],
    hi = arr[n - 1],
    output;
  const check = (val) => {
    let wood = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] > val) {
        wood += arr[i] - val;
      }
    }

    if (wood >= k) {
      return true;
    } else {
      return false;
    }
  };

  const BS = (lo, hi) => {
    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (check(mid)) {
        output = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return output;
  };

  const result = BS(lo, hi);
  console.log(result);
}

runProgram("4 7\n20 15 10 17");
