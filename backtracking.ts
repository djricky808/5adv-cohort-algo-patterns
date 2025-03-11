// 1. Generate Parentheses (Medium)
// Given an integer n, generate all combinations of well-formed parentheses with n pairs.
function generateParenthesis(n) {
  // Implement backtracking logic
}
// // Test Cases
// console.log(generateParenthesis(3)); // Normal Case
// console.log(generateParenthesis(0)); // Edge Case: No parentheses needed

// 2. Permutations (Medium)
// Given an array of distinct integers, return all possible permutations.
function permute(nums) {
  // Implement backtracking logic
  let permutations: number[][] = [];

  function addPermutation(index, numbers) {
    if (index === numbers.length) {
      permutations.push([...numbers]);
      /*... spread operator is used to clone the array so that when you are switching the numbers in numbers array around it doesn't switch around the numbers that are already pushed into the array.
      This is because when we directly push numbers into the array without cloning them they are the same instance in memory 
      without spreading => [numbers1, numbers1, numbers1] numbers is numbers1 in memory, so when you swap one you swap them all
      with spreading => [numbers1, numbers2, numbers3] numbers will become numbers4 in memory, so when you swap this one, it won't affect the others.

      This is an example of "pass by reference" research here: 
      https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/
      Also revisit the Fullmetal Alchemist React Project for another example.
*/
      return;
    }

    for (let i = index; i < numbers.length; i++) {
      [numbers[index], numbers[i]] = [numbers[i], numbers[index]];
      addPermutation(index + 1, numbers);
      [numbers[index], numbers[i]] = [numbers[i], numbers[index]];
    }
  }
  addPermutation(0, nums);
  return permutations;
}
// // Test Cases
// console.log(permute([1, 2, 3])); // Normal Case
// console.log(permute([])); // Edge Case: Empty array

// 3. Combination Sum (Medium)
// Given an array of integers and a target, return all unique combinations where numbers sum to target.
function combinationSum(candidates, target) {
  // Implement backtracking logic
  let combinations: number[][] = [];
  function comboSum(index, numbers, target, combo) {
    console.log("index", index, "numbers", numbers.length - 1);
    console.log("combination at index,i:", combo);
    let sum = combo.length > 0 ? combo.reduce((a, b) => a + b) : 0;

    if (sum === target) {
      console.log(`${combo} matches target sum, add to combinations`);
      combinations.push(combo);
      combo = [];
      index--;
      //return; //returns if the combo adds up to the target
    }
    if (sum > target) {
      console.log(`${combo} passed target sum`);
      return; //returns if the sum passed the target number
    }
    if (index === numbers.length - 1) {
      console.log(
        `${index} reached max length and ${combo} doesn't add to target`
      );
      return; //returns in index reached the end already, and passed the sum.
    }

    for (let i = index; i < numbers.length; i++) {
      console.log("index, i: combo", index, i, combo);
      comboSum(index + 1, numbers, target, [...combo, numbers[i]]);
    }
  }
  comboSum(0, candidates, target, combinations);
  return combinations;
}
// // Test Cases
//console.log(combinationSum([2, 3, 6, 7], 7)); // Normal Case
console.log(combinationSum([2, 3, 4, 5], 7)); //[3,4], [2,5] Normal Case
// console.log(combinationSum([2, 4], 7)); // Edge Case: No valid combinations

// 4. Word Search (Medium)
// Given an m x n grid of letters and a word, check if the word exists in the grid using adjacent letters.
function exist(board, word) {
  // Implement backtracking logic
}
// Test Cases
// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCCED"
//   )
// ); // Normal Case
// console.log(exist([["A"]], "B")); // Edge Case: Single letter grid with a different word
