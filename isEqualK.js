// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


function sumK(arr,k){
    let count=0
    for(let i=0;i<arr.length-1;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j]==k){
                    count++
                }
            }
        }
    if(count>=1){
        return true
    }else{
        return false
    }
    }

// console.log(sumK([0,15,2,7,9],17));

