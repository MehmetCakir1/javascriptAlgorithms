// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

//solution 1

function bingo(arr) {
    let alpha={
        1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H", 9:"I",  10:"J", 11:"K", 12:"L", 13:"M", 14:"N", 15:"O", 16:"P", 17:"Q", 18:"R", 19:"S", 20:"T", 21:"U", 22:"V", 23:"W", 24:"X", 25:"Y", 26:"Z"
    }
    let result="";
    for(let i=0;i<arr.length;i++){
        result+=alpha[arr[i]];
    }console.log(result);
    if(result.includes("B") && result.includes("I") && result.includes("N") && result.includes("G") && result.includes("O")){
        return ("WIN")
    }else{
        return ("LOSE")
    }
  };
// console.log(bingo([1,2,3,4,5,6,7,8,9,10]));  
// console.log(bingo([21,13,2,7,5,14,7,15,9,10]));  

//solution 1
function bingo(arr) {
    let nums=[2,7,9,14,15]
    let result="";
    let count=0
    for(let i=0;i<nums.length;i++){
        if(arr.includes(nums[i])){
            count++
        }
    }
    if(count==5){
        return "WIN"
    }else{
        return "LOSE"
    }
};