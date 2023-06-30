/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer. */

function isSortedAndHow(array) {
    let ascending = array.slice().sort((a,b) => a - b)
    let descending = array.slice().sort((a,b) => b - a)
    return array.join(',') === ascending.join(',') ? 'yes, ascending'
           : array.join(',') === descending.join(',') ? 'yes, descending' 
           :  'no'

}