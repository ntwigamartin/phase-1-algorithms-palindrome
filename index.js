function isPalindrome(word) {
  // Write your algorithm here
  return [...word].reverse().join("").toLowerCase()=== word.toLowerCase()
}
console.log(isPalindrome("Racecar"));
/* 
  Add your pseudocode here
  convert word to array, reverse array and join then compare with initial word
*/

/*
  Add written explanation of your solution here
  word needs to be an array to enable reverse
  strict equality operator is used to compare both value and type
  comparison evaluates to a boolean
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
