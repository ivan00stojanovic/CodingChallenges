/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string,
 or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input! */

function duplicateEncode(word){
    let str = word.toLowerCase(); let result = [] //let arr = str.toLowerCase()
      for(let char of str){
           let counter = 0;
          for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
              counter++;
          }
        }
//           counter <= 1 ? result.push('(') : result.push(')')
        result.push(counter <= 1 ? '(' : ')')
}
    return result.join('')
}

console.log(duplicateEncode('recede'))