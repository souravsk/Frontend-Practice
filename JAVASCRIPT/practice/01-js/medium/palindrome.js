/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //we have to remove the , . this this and make them lower case
  var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var rev = '';
  for(let i= cleanedStr.length - 1;i >= 0; i--){
   rev += cleanedStr.charAt(i) 
  }
  if(cleanedStr === rev){
    return true
  } else {
  return false;
}
}

 module.exports = isPalindrome;