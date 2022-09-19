// ou will be given a number and you will need to return it as a string in expanded form :

// expanded form illustration

// For example:

// expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
// expanded_from(1.24); // should return "1 + 2/10 + 4/100"
// expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
// expanded_from(0.04); // should return "4/100"


function expandedForm(num) {
    let str=num.toString()
    let result=""
    let str1=str.slice(0,str.indexOf("."))
    let str2=str.slice(str.indexOf(".")+1)
    str1 !=0 ?
    result = str1.split('').map((x,y,z) => x*10**(z.length-1-y)).filter(x => x).join(' + ') 
    + " + " + str2.split('').map((x,y,z) =>x!=0 && String(x)+"/"+String(10**(y+1))).filter(x => x).join(' + ') 
    :
    result = str2.split('').map((x,y,z) =>x!=0 && String(x)+"/"+String(10**(y+1))).filter(x => x).join(' + ')
    return result[0].match(/\+/) ? result.slice(2) : result
  }

    console.log(expandedForm(807.304));
    console.log(expandedForm(0.501));
