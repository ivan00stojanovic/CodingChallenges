/* Write a function that checks if a given string (case insensitive) is a palindrome. */

function isPalindrome(x) {
    let original = x.toLowerCase()
    let z = original
    let y = z.split('').reverse().join('')
      return y === z
  }