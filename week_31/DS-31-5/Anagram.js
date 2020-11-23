// a  = "aba"
// b  = "aab"

// a = "ab"
// b = "aba"
// NLogN + MLogM

// O(N)   O(1)

function runProgram(a, b) {
    let n1 = a.length,
      obj1 = {};
    let n2 = b.length,
      obj2 = {};
  
    for (let i = 0; i < n1; i++) {
      if (obj1[a[i]]) {
        obj1[a[i]]++;
      } else {
        obj1[a[i]] = 1;
      }
    }
  
    for (let i = 0; i < n2; i++) {
      if (obj2[b[i]]) {
        obj2[b[i]]++;
      } else {
        obj2[b[i]] = 1;
      }
    }
  
    let key1 = Object.keys(obj1).length;
    let key2 = Object.keys(obj2).length;
  
    if (key1 !== key2) {
      return false;
    }
  
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(runProgram("ab", "aba"));
  console.log(runProgram("ab", "cd"));
  console.log(runProgram("abc", "bca"))
  console.log(runProgram("", ""))
  