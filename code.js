//Sum Zero
function addToZero(arr) {
    const seenNumbers = {};
  
    for (let num of arr) {
      if (seenNumbers[-num]) {
        return true;
      }
      seenNumbers[num] = true;
    }
  
    return false;
  }
  
  console.log(addToZero([]));         
  console.log(addToZero([1]));  
  console.log(addToZero([1, 2, 3])); 
  console.log(addToZero([1, 2, 3, -2])); 

  //The runtime complexity of this code is O(n),
  //where 'n' is the number of elements in the input array.
  //This is because we iterate through the array once, and for each element, 
  //we perform constant-time operations.


//Unique Characters
function hasUnique(input) {
    for (let i = 0; i < input.length; i++){
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(hasUnique('Monday'));
console.log(hasUnique('Moonday'));

//The runtime complexity remains O(n), where 'n' is the length of the word, 
//as we're still iterating through the word once again.
//we perform constant-time operations 

//Pangram Sentence
function isPangram(sentence) {
    const lowerCaseSentence = sentence.toLowerCase();
    const characters = lowerCaseSentence.split("");
  
    const letterSet = new Set();
    
    for (let char of characters) {
      if (char >= 'a' && char <= 'z') {
        letterSet.add(char);
      }
    }
  
    return letterSet.size === 26;
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
  console.log(isPangram("I like cats, but not mice")); 

  //The runtime complexity remains O(n), where 'n' is the length of the input sentence.

//Longest word
function findLongestWord(words) {
    let longestLength = 0;
  
    for (let word of words) {
      if (word.length > longestLength) {
        longestLength = word.length;
      }
    }
  
    return longestLength;
  }
  console.log(findLongestWord(["hi", "hello"]));

  //This function iterates through the list of words, 
  //keeps track of the longest word's length, and returns that length. 
  //The runtime complexity of this code is O(n), where 'n' is the number of words in the list.

  //EXTRA CREDIT

//hasUniqueChars Function:
//Space Complexity: O(1) - The space used by this function is constant
//as it only uses a fixed amount of memory for the charSet object, 
//which stores letters that have been seen. The size of the object is limited to the number of unique characters 
//in the input word, which is at most 26 for the English alphabet.

//isPangram Function (Using .split):
//Space Complexity: O(n) - the space complexity is linear, where 'n' is the length of the input sentence. 
//It creates an array of characters with a size proportional to the length of the sentence. 

//findLongestWord Function:
//Space Complexity: O(1) - This function has constant space complexity. 
//It only uses a single variable, longestLength, to keep track of the length of the longest word, 
//and it does not depend on the size of the input list.
