// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve

function convertHTML(str) {
    let arr=str.split("");
    for(let i=0;i<arr.length;i++){
        switch(arr[i]){
            case "&":
                arr[i]="&amp;";
                break;
            case "<":
                arr[i]="&lt;";
                break;
            case ">":
                arr[i]="&gt;";
                break;
            case "\"":
                arr[i]="&quot;";
                break;
            case "'":
                arr[i]="&apos;";
                break;
        }
    } return arr.join("");
}

// console.log(convertHTML("Dolce &&> Gabbana")); 
// console.log(convertHTML("<>")); 
