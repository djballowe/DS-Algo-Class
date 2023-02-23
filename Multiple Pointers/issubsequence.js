// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
// without their order changing.

// Examples:

//     isSubsequence('hello', 'hello world'); // true
//     isSubsequence('sing', 'sting'); // true
//     isSubsequence('abc', 'abracadabra'); // true
//     isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(one, two) {
  let l = 0;
  let r = 0;
  while (r < two.length) {
    if (one[l] === two[r]) {
      if (l === one.length - 1) {
        return true;
      } else {
        l++;
        r++;
      }
    } else {
      r++;
    }
  }
  return false;
}
