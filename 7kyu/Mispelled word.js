/* Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True. */

var mispelled = function(word1, word2)
{
  // we take in two word which we need to compare
  //we need to return wether the words are the same or changed by one letter max
  //another exeption is if the word starts or ends with an extra number
  //1. go through the string
  //2. compare each letter, if the first el is a number, remove it
    if (word1.length < word2.length){
      let temp = word1;
      word1 = word2;
      word2 = temp;
  }
    let counter = 0
  for (let i=0,j=0;i<word1.length;i++,j++){
    if (word1[i]!==word2[j]){
    counter++
    if (word1.length>word2.length){
        i++
      }
    }
  }
  return counter<2
}

