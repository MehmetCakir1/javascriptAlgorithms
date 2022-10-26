// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

// Examples:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(n){
    let result=[];
    for(let i=2;i<n;i++){
        n%i==0 && result.push(i)
    }
    return result.length==0 ? `${n} is prime` : result
}

console.log(divisors(25));
console.log(divisors(15));
console.log(divisors(13));
console.log(divisors(7));
console.log(divisors(100));