// 1. Maximum Sum Subarray of Size K (Easy)
// Given an array of integers and an integer K, find the maximum sum of any contiguous subarray of size K.
function maxSumSubarray(arr, k) {
  // Implement sliding window logic
  if (k > arr.length) {
    return arr.reduce((a, b) => a + b);
  }
}
// Test Cases
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Normal Case
console.log(maxSumSubarray([1, 2], 3)); // Edge Case: k is greater than array length

// 2. Longest Substring Without Repeating Characters (Medium)
// Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
  // Implement sliding window logic
  let alpha = new Set();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    while (alpha.has(s[right])) {
      alpha.delete(s[left]);
      left++;
    }
    alpha.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
// Test Cases
// console.log(lengthOfLongestSubstring("abcabcbb")); // Normal Case
// console.log(lengthOfLongestSubstring("")); // Edge Case: Empty string

// 3. Longest Repeating Character Replacement (Medium)
// Given a string and an integer K, find the longest substring that can be obtained by replacing at most K characters.
function characterReplacement(s, k) {
  // Implement sliding window logic
}
// Test Cases
// console.log(characterReplacement("AABABBA", 1)); // Normal Case
// console.log(characterReplacement("A", 2)); // Edge Case: Single character string

// 4. Minimum Window Substring (Hard)
// Given a string S and a string T, find the minimum window in S which contains all characters of T.
function minWindow(s, t) {
  // Implement sliding window logic
}
// Test Cases
// console.log(minWindow("ADOBECODEBANC", "ABC")); // Normal Case
// console.log(minWindow("a", "aa")); // Edge Case: No valid substring
