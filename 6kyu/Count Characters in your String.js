/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

const count = (str) => {
    let result = {}
    
      for(let char of str){
        if(result[char] > 0) result[char]++
        else result[char] = 1
      }
        return result
  }