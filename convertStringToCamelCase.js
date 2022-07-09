// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//  The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    patternOne=/[-_](?=[a-z])/
    patternTwo=/[-_](?=[A-Z])/
    let result=""
    if(str==""){
        return ""
    }else{
        if(str.match(patternTwo)){
        return str.split(/[-_]/).join("")
    }
    else if(str.match(patternOne)){
        let arr=str.split(/[-_]/)
            for(let i=0;i<arr.length;i++){
            if(str[0].match((/[a-z]/))){
                str=arr[i][0].toUpperCase()+arr[i].slice(1)
                result+=str;
                result=result[0].toLowerCase()+result.slice(1)
            }else{
                str=arr[i][0].toUpperCase()+arr[i].slice(1)
                result+=str;
            }
        }
        return result
    }
    else{
        null
    }
    }
}
// console.log(toCamelCase("The_Stealth_Warrior"))
// console.log(toCamelCase("the-stealth-warrior"))
// console.log(toCamelCase(""))
// console.log(toCamelCase("i-Am-A-Programmer"))
