// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    let dict={};
    string.split("").map((item)=>!dict[item] ? dict[item]=1 : dict[item]++)
    return dict
  }

  console.log(count("aba"));