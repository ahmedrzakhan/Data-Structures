// Given number of minutes, convert it into human readable form.

// Example: 130 becomes 2hrs 10minutes

// 110 becomes 1hr 50minutes

// 120 becomes 2hrs 00minutes

// Note the exact format of output

// If number of hour is 1 then output would be hr and not hrs
// In case there are exact number of hours (like 120 minutes), keep minutes as 00
// Keep minutes always in plural form even if it is 1 (singular)
// Input Format

// First and only line of input contains a number which is total time in minutes
// that needs to be converted into human readable form

// Constraints

// 65<= input < 10000 minutes

// Output Format

// Output the string in correct format as per following rules:

// If number of hour is 1 then output would be hr and not hrs
// In case there are exact number of hours (like 120 minutes), keep minutes as 00
// Keep minutes always in plural form even if it is 1 (singular)
// There is exactly one space between hours reading and minutes reading
// Sample Input 0

// 135
// Sample Output 0

// 2hrs 15mins
// Sample Input 1

// 65
// Sample Output 1

// 1hr 5mins
// Sample Input 2

// 61
// Sample Output 2

// 1hr 1mins
// Explanation 2

// Here though ther is 1 minute, still output has minutes. So, keep this *inconsistent*
// format in mind

function processData(input) {
  //Enter your code here
  input = Number(input);
  // console.log('input', input);
  // console.log('typeof input', typeof input);

  hours = Math.floor(input / 60);
  // console.log('hours', hours);

  minutes = input % 60;
  // console.log('minutes', minutes);

  if (hours < 2 && minutes === 0) {
    console.log(hours + "hr" + " " + minutes + "0" + "mins");
  } else if (hours < 2 && minutes > 0) {
    console.log(hours + "hr" + " " + minutes + "mins");
  } else if (hours > 1 && minutes === 0) {
    console.log(hours + "hrs" + " " + minutes + "0" + "mins");
  } else if (hours > 1 && minutes > 0) {
    console.log(hours + "hrs" + " " + minutes + "mins");
  }
}
