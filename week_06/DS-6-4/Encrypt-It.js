// Indian army is going to do a surprise attack on one of its enemies country.
//  The President of India, the Supreme Commander of the Indian Army will be sending
// an alert message to all its commanding centers. As enemy would be monitoring the message,
// Indian army is going to encrypt(cipher) the message using basic encryption technique.
// A decoding key 'K' (number) would be sent secretly.

// You are assigned to develop a cipher program to encrypt the message. Your cipher
//  must rotate every character in the message by a fixed number making it unreadable by enemies.

// Given a single line of string 'S' containing alpha, numeric and symbols,
// followed by a number '0<=N<=1000'. Encrypt and print the resulting string.

// Note: The cipher only encrypts Alpha and Numeric. (A-Z, a-z, and 0-9) .
// All Symbols, such as - , ; %, remain unencrypted.
// Input Format

// First line of input contains single line of string 'S'

// Second line contains the number, encrypt key. K

// Constraints

// S contains alpha, numeric and symbols

// 0<=N<=1000

// Output Format

// Print the encrypted string

// Sample Input 0

// All-convoYs-9-be:Alert1.
// 4
// Sample Output 0

// Epp-gsrzsCw-3-fi:Epivx5.

function processData(input) {
  //Enter your code here
  // console.log('input', input);
  input = input.split("\n");
  // console.log('input', input);

  var [givenString, key] = [input[0], Number(input[1])];

  // console.log('givenString', givenString);

  // console.log('key', key);
  // console.log('typeof key', typeof key);

  lengthOfGivenString = givenString.length;
  // console.log('lengthOfGivenString', lengthOfGivenString);

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var numberSeries = "0123456789".split("");
  var result = [];
  var answer;

  // console.log('7777', upperCase[( upperCase.indexOf( givenString[ 0 ] ) ) ] );

  for (var i = 0; i < lengthOfGivenString; i++) {
    // console.log('givenString', givenString[i]);
    if (upperCase.indexOf(givenString[i]) !== -1) {
      answer = upperCase[(upperCase.indexOf(givenString[i]) + key) % 26];
      result.push(answer);
    } else if (lowerCase.indexOf(givenString[i]) !== -1) {
      answer = lowerCase[(lowerCase.indexOf(givenString[i]) + key) % 26];
      result.push(answer);
    } else if (numberSeries.indexOf(givenString[i]) !== -1) {
      answer = numberSeries[(numberSeries.indexOf(givenString[i]) + key) % 10];
      result.push(answer);
    } else {
      answer = givenString[i];
      result.push(answer);
    }
  }
  console.log(result.join(""));
}
