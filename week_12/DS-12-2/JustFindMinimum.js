// You are given N which is the number of different types of operation you need to
// perform on a stack.There are 3 different types of operations:

//     PUSH V: Here V is an integer which you need to push in the stack

// POP: Here POP out the top element from stack.(In
//     case stack is empty print "EMPTY")

// MIN: Print the minimum value present in the stack

// Input Format

// First line contains N which is the number of operations you need to perform on stack

// Next N line contains one of the 3 operations mentioned above

// Constraints

// N < 1000000

// V < 100

// Output Format

// The output consists of a line containing an integer with the smallest present value in the
// stack
// for queries of type "MIN"
// or "EMPTY"
// for "MIN"
// and "POP"
// operations when the stack
// is empty.

// Sample Input 0

// 11
// PUSH 5
// PUSH 7
// PUSH 3
// PUSH 8
// PUSH 10
// MIN
// POP
// POP
// MIN
// POP
// MIN
// Sample Output 0

// 3
// 3
// 5

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var numberOfOperations = Number(input[0]);
    // console.log("numberOfOperations", numberOfOperations);

    var stack = [];
    for (var i = 1; i <= numberOfOperations; i++) {
        // console.log(input[i]);
        var currentArray = input[i].split(' ');

        if (currentArray[0] === "PUSH") {
            stack.push(currentArray[1]);
        } else if (currentArray[0] === "POP") {
            if (stack.length === 0) {
                console.log("EMPTY");

            } else {
                stack.pop();
            }
        } else if (currentArray[0] === "MIN") {
            var smallest = Number.MAX_SAFE_INTEGER;

            for (var j = 0; j < stack.length; j++) {
                if (smallest > Number(stack[j])) {
                    // console.log("stack[j]",stack[j])

                    smallest = stack[j];
                    // console.log("smallest", smallest)
                }
            }
            if (stack.length === 0) {
                console.log("EMPTY");
            } else {
                console.log(smallest);
            }
        }
    }
}