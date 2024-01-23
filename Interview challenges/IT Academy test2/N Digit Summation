/* PART ONE: Write a function which returns the amount of digits the number parameter has */

function digitCounter(n) {
    return n.toString().split('').length;
  }
  
  /* PART TWO: Write a function which counts all the numbers in an array which n amount of digits. N and array are parameters */
  
  function summation(getDigitCount, arr) {
      const n = getDigitCount();
      console.log(n)
      let sum = 0;
      let filteredArr = arr.filter(num => num.toString().split('').length === n);
      sum = filteredArr.reduce((acc, num) => acc + num, 0);
      return sum;
    }
  
    //Test Case 1
    console.log(summation(digitCounter(432)), [53, 100, 4, 2345, 150], 250)