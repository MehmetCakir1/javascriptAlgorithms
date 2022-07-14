// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

function extraPerfect(n){
    let result=[];
    for(let i=1;i<=n;i+=2){
        result.push(i)
    }return result
}


// console.log(extraPerfect(7));