// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(first, second) {
  let firstArray = first.toString();
  let secondArray = second.toString();
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < firstArray.length; i++) {
    let key = firstArray[i];
    key in obj ? (obj[key] += 1) : (obj[key] = 1);
  }
  for (let i = 0; i < secondArray.length; i++) {
    if (secondArray[i] in obj) {
      obj[secondArray[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
