// Your task is to write a function which cuts cancer cells from the body.

// Cancer cells are divided into two types:
// Advance stage,described as letter C
// Initial stage,described as letter c
// Rest cells are divided as follows:

// Normal cell,described as lowercase letter
// Important cell,described as uppercase letter
// Prerequisites:
// Important cell,cannot be cut out.
// Advance cancer cell,should be cut out with adjacent cells if it can be done.
function cutCancerCells(organism){
    let result="";
    let pattern=/([a-z]{1})?[C]([a-z]{1})?/g;
    if(organism.match(pattern)){
        result=organism.replace(pattern,"")
        if(result.match("c")){
            result=result.replace(/c/g,"")
        }
    }else{
        result=organism.replace("c","")
    }
    return result
}


// console.log(cutCancerCells('acCcb'));
// console.log(cutCancerCells('CaaC'));
// console.log(cutCancerCells("C"));
// console.log(cutCancerCells('acb'));
// console.log(cutCancerCells('ab'));
// console.log(cutCancerCells('aCZ'));
// console.log(cutCancerCells('NcE'));
// console.log(cutCancerCells('CvOcPocvpQCcWccXTcCcCgCh'));


