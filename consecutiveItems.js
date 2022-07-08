// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==a && arr[i+1]==b){
            return true
        }else if(arr[i]==b && arr[i+1]==a){
            return true
        }
        }return false
    }

//   console.log(consecutive([1, 6, 4, -3, -78, 4], -3, 4));
//   console.log(consecutive([1, 3, 3,5,5], 3, 3));