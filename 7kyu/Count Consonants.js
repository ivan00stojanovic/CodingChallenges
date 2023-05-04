/* Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u. */

function consonantCount(str) {
    let vowels = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('');let result = 0
    for(let char of str){
      if(vowels.includes(char)) result++
    }
      return result
  }