// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks 
// whether the two arrays have the "same" elements, with the same multiplicities 
// (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121,
//  20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. 
//  It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.



function comp(array1, array2){
    let count=0;
    if(array1==null || array2==null){
        return false
    }else{
        array1=array1.sort((a,b)=>a-b); 
    array2=array2.sort((a,b)=>a-b); 
    for(let i=0;i<array1.length;i++){
        if(array1[i]**2==array2[0]){
            count++
            array2.shift()
        }
    }
    }
   return count==array1.length ? true: false;
}


// let a= [121, 144, 19, 161, 19, 144, 19, 11]  
// let b= [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// console.log(comp(a,b));















