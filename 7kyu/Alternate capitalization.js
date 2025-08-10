/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
 and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

function capitalize(s){
  let stringArray = s.split('')
  let evenArray = []
  let oddArray = []
    for(let i = 0; i < s.length; i++){
      if(i % 2 === 0){
        evenArray.push(s[i].toUpperCase())
        oddArray.push(s[i].toLowerCase())
      }else{
        evenArray.push(s[i].toLowerCase())
        oddArray.push(s[i].toUpperCase())
      }
    }
        return [evenArray.join(''), oddArray.join('')]
};