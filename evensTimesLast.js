// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL),
// multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    let sum=0;
  numbers.filter((item,index)=>index%2==0).map((item)=>sum+=item)
  return numbers.length>0 ? sum*numbers[numbers.length-1] : 0
  }

  console.log(evenLast([2, 3, 4, 5]));
  console.log(evenLast([]));