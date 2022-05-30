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

console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("algorithm"));


