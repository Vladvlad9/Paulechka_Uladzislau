function isPalindrome(s) {
  function cleanString(str) {
    return str
      .toLowerCase()
      .replace(/[\s.,!?;:'"()ёе]/g, '');
  }

  function isPalindromeResult(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindromeResult(str.slice(1, -1));
  }

  const cleanedString = cleanString(s);
  return isPalindromeResult(cleanedString);
}

const result = isPalindrome("Она не жена, но...");
console.log(result);
