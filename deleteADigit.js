// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

// Input/Output
// [input] integer n

// Constraints: 10 ≤ n ≤ 1000000.

function deleteDigit(n) {
    let counter=0;
    let result=[];
    str=n.toString();
    result.push(Number(str.slice(1)))  1001
    for(let i=1;i<str.length;i++){
        result.push(Number(str.slice(0,i)+str.slice(i+1)))
       
    }
    return result.sort((a,b)=>b-a)[0]
  }

  console.log(deleteDigit(1001));
 