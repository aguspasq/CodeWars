// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

//Podría resolverla como en clase con callbacks, pero quería practicar switch. 

function arithmetic(a,b,operacion) {
    switch (operacion) {
        case "add":
            return a + b ;
            break;
        case "subtract":
            return a - b;
            break ;
        case "divide" :
            return a / b ;
        case "multiply":
            return a * b ;
        default:
            return "Insert a valid operation"
            break;
    }
    
}

