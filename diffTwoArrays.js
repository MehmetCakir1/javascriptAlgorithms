// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
//In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

//solution 1
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(i => arr1.includes(i)==false|| arr2.includes(i)==false)
}
// console.log(diffArray([1, 2, 3, 9], [1, 2, 3, 4, 5])); 

//solution 2
function diffArray(arr1, arr2) {
    let result=[];
    function onlyItem(first,second){
        for(let i=0;i<first.length;i++){
            if(second.indexOf(first[i])==-1){
                result.push(first[i])
            }
        }
    }
    onlyItem(arr1,arr2)
    onlyItem(arr2,arr1)
    return result
    }
// console.log(diffArray([1, 2, 3, 9], [1, 2, 3, 4, 5])); 
