/* Instructions
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples
Input:

fibsFizzBuzz(5)
Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]
Input:

fibsFizzBuzz(1)
Output:

[1] */


var fibsFizzBuzz = function(n) {
    let arr = [1]
   for(let i = 1; i < n; i++){
     if(i === 1) {
       arr.push(1)
     }else{
     let num = arr[i - 1] + arr[i - 2];
     arr.push(num)
     }
   }
     return arr.map( num => {
       if(num % 5 === 0 && num % 3 === 0){
         return 'FizzBuzz'
       } else if(num % 3 === 0) {
         return 'Fizz'
       }else if(num % 5 === 0){
         return 'Buzz'
       }else{
          return num 
       }
     
     });
}