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

const rotate = (nums, k) => {
    const reverse = (start, end) => {
      while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
      }
    };
  
    const n = nums.length;
    k %= n; // Normalize k to be within array length
  
    reverse(0, n - 1);         // Reverse the entire array
    reverse(0, k - 1);         // Reverse the first k elements
    reverse(k, n - 1);         // Reverse the remaining elements
  
    return nums;
  };
  
  
  
  