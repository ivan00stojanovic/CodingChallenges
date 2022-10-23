/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str){
    let change = str.split(' ')
     for(let i = 0; i<change.length; i++){
       if(change[i] == '!' || change[i] == '.' || change[i] =='?'){
         change[i] = change[i]
       }else{
         change[i] += change[i][0] + 'ay'
         change[i] = change[i].substring(1) 
       }
     }
       return (change.join(' '))
       };