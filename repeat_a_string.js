//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
let empty="";
function repeatStringNumTimes(str, num) {
    if(num>0){
       for(let i=1;i<=num;i++){
           empty+=str;
       }
    }
    return empty
  }

  //repeatStringNumTimes("abc", 3);