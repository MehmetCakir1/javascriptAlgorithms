//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

let sentence="This is example";
let reversed=sentence.split(" ");
let result=[];
for(let x of reversed){
    result.push(x.split("").reverse().join("")); //words reversed individually
}
console.log(String(result.reverse())); 