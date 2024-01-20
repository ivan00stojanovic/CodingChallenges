/* Make a function which checks if a string argument is a palindrome. Examples: 
    anavolimilovana je palindrom
    sirimamiris je palindrom
    beograd nije palindrom */

    function palindromeChecker(string){
        return string === string.split('').reverse().join('')
      }