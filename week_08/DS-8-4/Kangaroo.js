// You are choreographing a circus show with various animals. For one act, you 
// are given two kangaroos on a number line ready to jump in the positive direction
//  (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the 
// same time as part of the show. If it is possible, return YES, otherwise return NO.

// For example, kangaroo  starts at  with a jump distance  and kangaroo  starts at  
// with a jump distance of . After one jump, they are both at , (, ), so our answer is YES.

// Function Description

// Complete the function kangaroo in the editor below. It should return YES if they 
// reach the same position at the same time, or NO if they don't.

// kangaroo has the following parameter(s):

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2
// Input Format

// A single line of four space-separated integers denoting the respective values of

// Constraints

// Output Format

// Print YES if they can land on the same location at the same time; otherwise, print NO.

// Note: The two kangaroos must land at the same location after making the same number 
// of jumps.

// Sample Input 0

// 0 3 4 2
// Sample Output 0

// YES
// Explanation 0

// The two kangaroos jump through the following sequence of locations:

// image

// From the image, it is clear that the kangaroos meet at the same location (number  on
//      the number line) after same number of jumps ( jumps), and we print YES.

// Sample Input 1

// 0 2 5 3
// Sample Output 1

// NO
// Explanation 1

// The second kangaroo has a starting location that is ahead (further to the right) of 
// the first kangaroo's starting location (i.e., ). Because the second kangaroo moves 
// at a faster rate (meaning ) and is already ahead of the first kangaroo, the first
//  kangaroo will never be able to catch up. Thus, we print NO.



function kangaroo(x1, v1, x2, v2) {
    
    if ( x2 > x1 && v2 > v1 ) {
        console.log("NO");
        return "NO";
        
    } else if ( ( x2 > x1 && v2 < v1 ) || ( x1 > x2 && v1 < v2) ) {
        
        var firstKangaroo = [x1 + v1];
        var secondKangaroo = [x2 + v2];
        
        for ( var i = 0; i < 10000; i++ ) {
            var sumOfFirstKangarooJump = firstKangaroo[i] + v1;
            firstKangaroo.push(sumOfFirstKangarooJump);
            
            var sumOfSecondKangarooJump = secondKangaroo[i] + v2;
            secondKangaroo.push(sumOfSecondKangarooJump);
            
            if ( firstKangaroo[i] === secondKangaroo[i] ) {
                console.log("YES");
                return "YES";
            } 
            
            if ( firstKangaroo[ 10000 - 1 ] !== secondKangaroo[ 10000 - 1 ]) {
                console.log("NO");
                return "NO";
            }
        }
        
        console.log("firstKangaroo", firstKangaroo);
        console.log("secondKangaroo", secondKangaroo);
        
    } else {
        return "NO";
    }

}