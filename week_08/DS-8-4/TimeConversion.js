// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
//  Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new
//  string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// s: a string representing time in  hour format
// Input Format

// A single string  containing a time in -hour clock format (i.e.:  or ), where  and .

// Constraints

// All input times are valid
// Output Format

// Convert and print the given time in -hour format, where .

// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {

    s = s.split(':');
    // console.log('s', s);
    
    return chechkIfAmOrPm(s);

}

var chechkIfAmOrPm = function(time) {
    // console.log('time', time);
    
    var thirdElement = time[2];
    // console.log('thirdElement', thirdElement);
    
    if ( thirdElement[2] === 'A') {
        // console.log('AM');
       return convertToAm(time)
        
    } else {
        // console.log('PM');
       return convertToPm(time)
    }
}

var convertToAm = function(time) {
    // console.log(time);
    
        if ( time[0] === "12" ) {
            time[0] = "00";
            
    }
    
    console.log( time.join(':').replace('AM', ''));
    return (time.join(':').replace('AM', ''))  
}

var convertToPm = function(time) {
    // console.log(time);

        if ( time[0] === "12" ) {
            time[0] = "12";
            
        } else {
            
            time[0] = Number( time[0] ) + 12;
        }

        console.log( time.join(':').replace('PM', ''));
    
    return (time.join(':').replace('PM', '')) 
}

timeConversion('07:05:45PM');
