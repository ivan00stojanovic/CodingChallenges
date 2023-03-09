/* When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata. */

function swap (string) {
    //we are getting a string as a function parameter
    //we need to return a string which vowels' are upperCased
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let result = []
    let arr = string.split('')
      for(let char of arr){
        if(vowels.includes(char)){
          result.push(char.toUpperCase())
        }else{
          result.push(char)
        }
      }
        return  result.join('')
  }