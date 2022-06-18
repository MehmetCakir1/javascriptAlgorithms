//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
    let result="";
    if(num<str.length){
    result=str.substr(0,num)+"...";
    return result;
    }else{
        return str;
    }
}
//truncateString("A-tisket a-tasket A green and yellow basket", 8);