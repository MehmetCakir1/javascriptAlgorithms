//Return the factorial of the provided integer.
function factorialize(num){
    let result=1;
    for(let i=1;i<=num;i++){
        result*=i
    }
    return result;
}
//factorialize(5)
