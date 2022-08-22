// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    word=word.toLowerCase()
    let dict ={};
    let result=""
    for(let i=0;i<word.length;i++){
        if(!dict.hasOwnProperty(word[i])){
            dict[word[i]]="("
        }else{
            dict[word[i]]=")"
        }
    }
    for(let j=0;j<word.length;j++){
        result+=dict[word[j]]
    }
    return result
}

console.log(duplicateEncode("(( @"))
console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("succeSS"))