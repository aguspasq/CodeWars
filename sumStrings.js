// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  let toNumbera = BigInt(a);
  let toNumberb = BigInt(b);
  let sum;
  if (a == "") {
    sum = b;
  } else if (b == "") {
    sum = a;
  } else {
    sum = toNumbera + toNumberb;
  }
  let sumint= BigInt(sum)
  let result = sumint.toString();
  return result;
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
