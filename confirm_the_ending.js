//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

//solution 1
function confirmEnding(str, target) {
    return str.endsWith(target);
  }
//solution 2
  function confirmEnding(str, target) {
    if(str.substr(-(target.length))==target){
        return true
    }else{
        return false
    }
  }

//confirmEnding("Bastian", "n");
