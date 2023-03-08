/* I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

function arrayPlusArray(arr1, arr2) {
    let arr1Sum = 0
    let arr2Sum = 0
      arr1.forEach(x => arr1Sum += x)
      arr2.forEach(x => arr2Sum += x)
    return arr1Sum + arr2Sum; 
}