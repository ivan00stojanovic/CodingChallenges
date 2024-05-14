/* Please write a function that sums a list, but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4. */

function sumNoDuplicates(numList) {
    if (numList.length === 0) return 0;
    let sum = 0; let count = {};
  
    for (let num of numList) {
      count[num] = (count[num] || 0) + 1;
    }
  
    for (let num in count) {
      if (count[num] === 1) {
        sum += parseInt(num);
      }
    }
  
    return sum;
  }
  

  //solution 2

  function sumNoDuplicates(arr) {
    let uniqueArr = [];
    let sum = 0;
    arr.forEach(num => {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            uniqueArr.push(num);
            sum += num;
        }
    });
    return sum;
}