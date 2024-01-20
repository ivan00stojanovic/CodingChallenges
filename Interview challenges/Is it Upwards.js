/* IT Academy Test 1

1. Write a function which checks wether the digits an  a number are going up in order. Examples:
 n=359 // true
 n=638 // false
 n=9   // true
 n=777 // false */

 function goingUp(n){
    const arr = n.toString().split('').map(num => parseInt(num))
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i+1] <= arr[i]){
        return false
      }
    }
          return true
  }

  console.log(goingUp(359))
  console.log(goingUp(638))
  console.log(goingUp(9))
  console.log(goingUp(777))
