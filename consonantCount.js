// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text 
// and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let vowels=["a","e","i","o","u"]
    let count=0;
    let arr=str.split("")
    arr.map(item=>vowels.indexOf(item)==-1 && item.match(/[a-z]/gi) ? count++ : null)
    return count
  }

  console.log(consonantCount("helLo world"));
  console.log(consonantCount("7889"));