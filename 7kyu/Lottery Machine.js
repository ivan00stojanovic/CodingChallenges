/* unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

Examples
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5" */

function lottery(str){
    let arr = str.split('')
  let result = [... new Set (arr.filter(num => parseInt(num) >= 0))]
  return result.join('')
  
    
  }
  
  console.log(lottery('ffaQtaRFKeGIIBIcSJtg'))