// // // Your task is to create a function that does four basic mathematical operations.The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

function basicOp(operation,value1,value2) {
    let resultado = 0 ;
    if (operation == "+" || operation == "sum") {
        resultado = value1 + value2;
        return resultado; 
    }
    else if (operation == "-" || operation == "rest") {
        resultado = value1 - value2;
        return resultado; 
    }
    else if (operation == "/" || operation == "division") {
        resultado = value1 / value2;
        return resultado;
    } 
    else if (operation == "*" || operation == "multiplication") {
        resultado = value1 * value2;
        return resultado;  
        
    }
    else { 
        return "error"
    }
}

console.log(basicOp("/",1,2));
