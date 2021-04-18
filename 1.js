//Write a function called repeat_string which repeats the given string str exactly count times.

//repeatStr(6, "I") // "IIIIII"
 
function repeatStr(n, string){
    for (let i = 0; i = n; i++) {
    let rep = "";
    rep = rep + string.repeat(i); 
    return rep;    
    }
}

console.log(repeatStr(6, "Hola"));
