//This function checks if a string is a palindrome. The most efficient way is to use a "two-pointer" approach, checking the start and end of the string and moving inward.


function isPalindrome(str) {
  // 1. Normalize the string
  //    - /[\W_]/g is a regex for non-alphanumeric chars (like spaces, punctuation, underscores)
  const normalized = str.toLowerCase().replace(/[\W_]/g, '');

  // 2. Use two pointers
  let left = 0;
  let right = normalized.length - 1;

  // 3. Loop until the pointers meet or pass each other
  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      // If characters don't match, it's not a palindrome
      return false;
    }
    // Move pointers inward
    left++;
    right--;
  }

  // If the loop finishes, it's a palindrome
  return true;
}

// --- Examples ---
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false

//This function checks if two strings are anagrams. The easiest method is to normalize them, sort their characters, and see if the resulting strings are identical.


function isAnagram(str1, str2) {
  // Helper function to normalize and sort
  const processString = (str) => {
    return str.toLowerCase()
              .replace(/[\W_]/g, '') // Remove non-alphanumeric
              .split('')             // Turn into an array of characters
              .sort()                // Sort the array
              .join('');             // Join back into a string
  };

  const processed1 = processString(str1);
  const processed2 = processString(str2);

  return processed1 === processed2;
}

// --- Examples ---
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rail safety", "fairy tales")); // true
console.log(isAnagram("binary", "brainy")); // true
console.log(isAnagram("apple", "orange")); // false


//Pattern Searching (Finding a Substring)

const text = "The quick brown fox jumps over the lazy dog.";

// --- Method 1: Check if it exists ---
const pattern1 = "fox";
console.log(`Does text include "fox"?`, text.includes(pattern1)); // true

const pattern2 = "cat";
console.log(`Does text include "cat"?`, text.includes(pattern2)); // false

// --- Method 2: Find where it is ---
const pattern3 = "jumps";
const index = text.indexOf(pattern3);
console.log(`"jumps" starts at index:`, index); // 20

const notFoundIndex = text.indexOf("wolf");
console.log(`"wolf" starts at index:`, notFoundIndex); // -1


//Subsequence
//This is different from a substring. We need a function to check if one string is a subsequence of another. We can do this by iterating through the main string and checking if the subsequence characters appear in the correct order.


function isSubsequence(sub, main) {
  let subIndex = 0; // Pointer for the subsequence
  let mainIndex = 0; // Pointer for the main string

  // Loop through both strings
  while (mainIndex < main.length && subIndex < sub.length) {
    // If characters match, move the subsequence pointer
    if (main[mainIndex] === sub[subIndex]) {
      subIndex++;
    }
    // ALWAYS move the main string pointer
    mainIndex++;
  }

  // If we found all characters in the subsequence (subIndex reached the end)
  // then it IS a subsequence.
  return subIndex === sub.length;
}

// --- Examples ---
const mainString = "apple";

console.log(isSubsequence("ale", mainString)); // true (a, l, e are in "apple" in order)
console.log(isSubsequence("ape", mainString)); // true (a, p, e are in "apple" in order)
console.log(isSubsequence("app", mainString)); // true
console.log(isSubsequence("eal", mainString)); // false (e comes before a and l)