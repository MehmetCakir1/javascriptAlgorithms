// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been,
//  and now they want to show Charlie their entire collection. However,
//   Charlie doesn't like these sessions, since the motif usually repeats.
//    He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. 
// Luckily, Alice and Bob are able to encode the motif as a number.
//  Can you help them to remove numbers such that their list contains each number only up to N times, 
// without changing the order?

function deleteNth(arr,n){
    let result=[]
    let dict={}
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
            dict[arr[i]]=1
        }else{
            dict[arr[i]]++
            if(dict[arr[i]]<=n){
                result.push(arr[i])
            }else{
                null
            }
        }
    }
return result
}
console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));

