// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    let sum=0;
    let result=[];
    let arr=[0,1];
    if(num>1){
        for(let i=0;i<num;i++){
            arr.push(arr[i]+arr[i+1])
    }
    result=arr.filter(a=>a%2!=0 && a<=num).map(x=>sum+=x)
    return result[result.length-1]
}else{
    return 1
}
}
 console.log(sumFibs(1));
 console.log(sumFibs(75025)); 


// let g=[1,2,3,4,5,6]
// let sum=0
// console.log(g.map(a=>sum+=a)[g.length-1]);
// let h=g.map(a=>sum+=a)
// console.log(h);
// console.log(g);