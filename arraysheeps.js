// Very simple, given a number, find its opposite.


function opposite(number) {
    return Math.sign(number) == 1? - Math.abs(number) : + Math.abs(number) 
  }

  console.log(opposite(-5));
