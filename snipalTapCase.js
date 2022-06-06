// // Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str.split(/\W|_|(?=[A-Z])/).join("-").toLowerCase();
    
}

console.log(spinalCase('This*Is*Spinal Tap')); 
console.log(spinalCase("The_Andy_Griffith_Show")); 
console.log(spinalCase('thisIsSpinalTap')); 

