/* Given an array with repeating numbers, write a function which will remove duplicates from the array. */

let arr = [ 5,4,3,5,1,3,5,5 ];

function removeDuplicates(array) {
return array.filter((a, b) => array.indexOf(a) === b)
};

console.log(removeDuplicates(arr))