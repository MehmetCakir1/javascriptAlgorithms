// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.


function nthEven(n){
    return 2*n-2
  }
  

  console.log(nthEven(1));
  console.log(nthEven(3));
  console.log(nthEven(100));
  console.log(nthEven(1298734));

