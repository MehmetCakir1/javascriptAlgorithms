// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(Boolean(arr[i])!=false){
            result.push(arr[i])
        }
    }
    return result;
}
// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer([null, 0, NaN, undefined, ""]));


