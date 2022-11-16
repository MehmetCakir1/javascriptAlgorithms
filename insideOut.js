// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'.
// By this I mean the internal letters will move out, and the external letters move toward the centre.
// If the word is even length, all letters will move.
// If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x) {
    let arr = x.split(" ");
      let result = "";
    for(let i=0;i<arr.length;i++){
        if(arr[i].length%2==0){
            result+=arr[i].slice(0,(arr[i].length/2)).split("").reverse().join("")+arr[i].slice(arr[i].length/2).split("").reverse().join("")+" "
        }else{
            let middle = arr[i].charAt(Math.floor(arr[i].length / 2));
            result+=arr[i].slice(0,arr[i].length/2).split("").reverse().join("")+middle+arr[i].slice(Math.ceil(arr[i].length/2)).split("").reverse().join("")+" "
        }
    }
    return x.match(/\w/) ? result.trim() : x
}

console.log(insideOut("taxi"));
console.log(insideOut("taxis"))
console.log(insideOut("man i need a taxi up to ubud"));
console.log(insideOut("climbing"));
console.log(insideOut('what time are we climbing up the volcano'));
console.log(insideOut('  '));
//
