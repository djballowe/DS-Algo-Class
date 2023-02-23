// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

function averagePair(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let average = nums[l] + nums[r] / 2;
    if (average === target) {
      return true;
    } else if (average < target) {
      l++;
    } else {
      r--;
    }
  }
  return false;
}
