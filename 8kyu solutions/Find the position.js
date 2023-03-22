/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';//regardless if string or array
  return `Position of alphabet: + ${(alphabet.indexOf(letter) + 1)}`;
}