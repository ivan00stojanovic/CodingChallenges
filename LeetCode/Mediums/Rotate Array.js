/* Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const rotate = (arr, k) => {
//   for (let i =  arr.length - 1; i > arr.length - k - 1 ; i--){
//     let holder = arr.pop()
//     arr.unshift(holder)    
//   }
//         return arr
// }

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
let result = []
    for(let i = nums.length - k; i < nums.length;i++){
        result.push(nums[i])
    }
    for(let j = 0; j < nums.length - k; j++){
        result.push(nums[j])
    }
      
    for(let  i = 0; i < nums.length; i++){
      nums[i] = result[i]
    }

    return nums

};
  
  
  
  