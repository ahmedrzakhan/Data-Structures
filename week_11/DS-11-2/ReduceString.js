// Given a string of lowercase characters in range ascii[‘a’..’z’]. You can perform one 
// operation on this string in which you can selects a pair of adjacent lowercase letters 
// that match, and delete them.

// For instance, the string aab could be shortened to b in one operation.

// Your task is to delete as many characters as possible using this method and print the 
// resulting string. If the final string is empty, print "Empty String" (without quotes).

// Please note that characters can be deleted only if they form a pair and are same(i.e from 
//   aaa we can only delete 2 a's and will be left with a single a).

// I know there exists a simple implementation based solution of this question, but please try 
// to come up with an approach that uses stack data structure to solve the purpose

// Input Format

// First and the only line contains string

// Constraints

// Length of string < 1000

// Output Format

// If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

// Sample Input 0

// aaabccddd
// Sample Output 0

// abd
// Explanation 0

// You can perform the following sequence of operations to get the final string:

// aaabccddd -> abccddd -> abddd -> abd


function processData(input) {
    //Enter your code here
    var givenString = input;
    // console.log("givenString", givenString);

    var stack = [];

    for (var i = 0; i < givenString.length; i++) {

        if (givenString[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(givenString[i]);
        }
    }

    if (stack.length === 0) {
        console.log("Empty String");
    } else {
        console.log(stack.join(''));

    }
}