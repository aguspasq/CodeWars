// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        let sum= 0;
        sum = sum + numeros[i]
        return sum;
    } 
 }

console.log(oddOrEven([6, 1, 5]));