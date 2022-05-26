// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
    let arr=str.split(" ");
    let list=[];
    let result="";
    for(let i=0;i<arr.length;i++){
        list.push(  parseInt(arr[i],2).toString(10))
    }
    for(let j=0;j<list.length;j++){
        result+=String.fromCharCode(list[j])
    }return result
  }
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); //Aren't bonfires fun!?