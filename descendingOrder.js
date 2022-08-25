// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Input: 42145 Output: 54421

// solution 1
function descendingOrder(n){
  let result=String(n).split("").sort((a,b)=>b-a).join("");
  return result
}
// console.log(descendingOrder(42354));
// solution 2
function descendingOrder(n){
    let str=String(n);
    let result=[];
    for(let i=0;i<str.length;i++){
        result.push(str[i]);
    }
    result=((result.sort((a,b)=>b-a)).join(""))
    return Number(result)
  }
//   console.log(descendingOrder(42145));