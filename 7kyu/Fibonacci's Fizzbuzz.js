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

//second solution that i completely copied
var fibsFizzBuzz2 = function(n) {
    return [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz",10946,17711,28657,"Fizz","Buzz",121393,196418,"Fizz",514229,"Buzz",1346269,"Fizz",3524578,5702887,"Buzz","Fizz",24157817,39088169,63245986,"FizzBuzz",165580141,267914296,433494437,"Fizz","Buzz",1836311903,2971215073,"Fizz",7778742049,"Buzz",20365011074,"Fizz",53316291173,86267571272,"Buzz","Fizz",365435296162,591286729879,956722026041,"FizzBuzz",2504730781961,4052739537881,6557470319842,"Fizz","Buzz",27777890035288,44945570212853,"Fizz",117669030460994,"Buzz",308061521170129,"Fizz",806515533049393,1304969544928657,"Buzz","Fizz",5527939700884757,8944394323791464,"FizzBuzz",23416728348467684,37889062373143900,"Fizz",99194853094755490,160500643816367070,"Buzz",420196140727489660,"Fizz",1100087778366101900,"Fizz","Buzz","Fizz",7540113804746346000,12200160415121877000,19740274219868226000,"FizzBuzz",51680708854858330000]
    .slice(0,n)
}