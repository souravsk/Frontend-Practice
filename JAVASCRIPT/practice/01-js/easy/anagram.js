/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length === str2.length) {
    let charCount = str1.length;
    let check = true;
    for (let i = 0; i < charCount; i++) {
      check = false;
      for (let j = 0; j < charCount; j++) {
        if (str1[i] === str2[j]) {
          check = true;
          break;
        }
      }
      if (!check) {
        break;
      }
    }
    if (check) {
      console.log("It is an anagram");
    } else {
      console.log("It is not an anagram");
    }
  }
}

module.exports = isAnagram;
