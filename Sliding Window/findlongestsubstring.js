// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

function findLongestSubstring(string) {
  let longestSub = 0;
  let currentLongest = 0;
  let start = 0;
  let end = 0;
  //   let currentLetter = string[start];
  let currentString = {};
  for (let i = 0; i < string.length; i++) {
    
  }
  console.log(longestSub);
}

findLongestSubstring("longestsubstring");
