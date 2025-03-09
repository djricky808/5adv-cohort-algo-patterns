// 1. Maximum Sum Subarray of Size K (Easy)
// Given an array of integers and an integer K, find the maximum sum of any contiguous subarray of size K.
function maxSumSubarray(arr, k) {
  // Implement sliding window logic
  if (k > arr.length) {
    return arr.reduce((a, b) => a + b);
  }
  let maxSum = 0;
  let max: number[] = [];
  let left = 0;
  for (let right = k; right < arr.length; right++) {
    let maxSumSubArr = arr.slice(left, right);
    let evalSum = maxSumSubArr.reduce((a, b) => a + b);
    if (evalSum > maxSum) {
      maxSum = evalSum;
    }
    left++;
  }
  return maxSum;
}
// Test Cases
// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Normal Case
// console.log(maxSumSubarray([1, 2], 3)); // Edge Case: k is greater than array length

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
  if (s.length <= k) {
    return s.length;
  }
  let charSet = new Set();
  let left = 0;
  let chances = k;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    console.log(left, right, max);
    while (!charSet.has(s[right])) {
      if (charSet.size === 0) {
        console.log("looking for", s[right]);
        charSet.add(s[right]);
        console.log(charSet, chances, s.slice(left, right));
      } else {
        if (chances > 0) {
          console.log(
            s[right],
            "different character but can still change the letter"
          );
          chances--;
          right++;
          console.log(charSet, chances, s.slice(left, right));
        } else {
          console.log(
            "no chances left, move the left slider and find a new max"
          );
          let string = s.slice(left, right);
          console.log(string);
          let substring = s.slice(left, right).length;

          if (substring > max) {
            max = substring;
          }
          charSet.clear();
          left++;
          right = left;
          chances = k;
          console.log("after clear", left, right, k, charSet, max);
        }
      }
    }
    //right++;
  }
  return max;
}
// Test Cases

// console.log(characterReplacement("AABABBA", 1)); // Normal Case
// console.log(characterReplacement("A", 2)); // Edge Case: Single character string
console.log(characterReplacement("ABBBBBB", 1)); //7 Normal Case

// 4. Minimum Window Substring (Hard)
// Given a string S and a string T, find the minimum window in S which contains all characters of T.
function minWindow(s, t) {
  // Implement sliding window logic
}
// Test Cases
// console.log(minWindow("ADOBECODEBANC", "ABC")); // Normal Case
// console.log(minWindow("a", "aa")); // Edge Case: No valid substring
