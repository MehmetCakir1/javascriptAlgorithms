//Pig Latin is a way of altering English Words. The rules are as follows:
//If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
//If a word begins with a vowel, just add way at the end.
//Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.



function translatePigLatin(str) {
    var result = "";
    var regex = /[aeiou]/gi;
    if (str[0].match(regex)) {
      result = str + "way";
    } else if (str.match(regex) === null) {
      result = str + "ay";
    } else {
      var vowelIndex = str.indexOf(str.match(regex)[0]);
      result = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
    }
    return result;
  }

// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("rhythm"));
// console.log(translatePigLatin("schwartz"));
// console.log(translatePigLatin("algorithm"));


