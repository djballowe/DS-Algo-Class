// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

function findLongestSubstring(s) {
  if (s.length === 1) {
    return 1;
  }
  let seen = {};
  let maxLen = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (key in seen && seen[key] >= start) {
      maxLen = Math.max(maxLen, i - start);
      start = seen[key] + 1;
      seen[key] = i;
    } else {
      seen[key] = i;
      if (i === s.length - 1) {
        maxLen = Math.max(maxLen, i - start + 1);
      }
    }
  }
  return Object.keys(seen).length === s.length ? s.length : maxLen;
}

findLongestSubstring("longestsubstring");
