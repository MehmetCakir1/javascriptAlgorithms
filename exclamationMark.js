// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove (string) {
    arr=string.split(" ");
    console.log(arr);
    return arr.filter((a)=>(a.match(/(!)/g))==null ||a.match(/(!)/g).length>1).join(" ")
}

// console.log(remove("Hi! !Hi! Hi!"));
//   console.log(remove("Hi! Hi!! Hi!"));
//   console.log(remove("Hi! Hi! Hi!"));
//   console.log(remove("Hi"));
//   console.log(remove("Hi !Hi! Hi!"));
//   console.log(remove("!nzbf! bug xldkok! phoci tnncqld kbiahge cscr! !suptb!"));



//   console.log(/(!)/.test("!Hi!"));
// console.log("Hi".match(/[!]/g).length);