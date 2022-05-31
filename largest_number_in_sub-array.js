//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


function largestOfFour(arr) {
    let maxarr=[];
for(let i=0;i<arr.length;i++){
        maxarr.push(Math.max(...arr[i]))
} return maxarr
}
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); 

//solution 2
// function largestOfFour(arr) {
//     const results = [];
//     for (let i = 0; i < arr.length; i++) {
//       let largestNumber = arr[i][0];
//       for (let j = 1; j < arr[i].length; j++) {
//         if (arr[i][j] > largestNumber) {
//           largestNumber = arr[i][j];
//         }
//       }
//       results[i] = largestNumber;
//     }
  
//     return results;
//   }
//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));