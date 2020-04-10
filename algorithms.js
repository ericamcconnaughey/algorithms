//Complete the solution so that it reverses the string value passed into it.
//solution('world'); // returns 'dlrow'

// function reverse(string) {  
//   let newString = "";
//   for (var i = 0; i <= (string.length-1); i++) {
//     let last = string[(string.length-i)-1];
//     let newFirst = last;
//     console.log(newFirst);
//     newString += newFirst;
//   } 
//   console.log(newString);
//   return newString;
// }
// reverse('world');


// function reverseB(string) {
//   let newString = "";
//   for (var i = string.length-1; i >= 0; i--) {
//     newString += string[i];
//   }
//   console.log(newString);
//   return newString;
// }
// reverseB("hello");



//Return the factorial of the provided integer.

// function factorialize(num) {
//   var product = 1;
//   for (var i = 1; i <= num; i++) {
//     product *= i;
//   }
//   console.log(product);
//   return product;
// }
// factorialize(5);

// BETTER 
// function factorialize(num) {
//   for (var product = 1; num > 0; num--) {
//     product *= num;
//   }
//   return product;
// }
// factorialize(5);



// Return the length of the longest word in the provided sentence.
// function findLongestWordLength(str) {
//   var words = str.split(' ');
//   var maxLength = 0;
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }
//     console.log(maxLength);
//     return maxLength;
//   }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");



// Return an array consisting of the largest number from each provided sub-array.
// function largestOfFour(arr) {
//   var newArr = [];
//   for (var n = 0; n < arr.length; n++) {
//     var subArray = arr[n];
//     var largestNum = subArray[0];
//     for (var sb = 0; sb < subArray.length; sb++) {
//       if (subArray[sb] > largestNum) {
//         largestNum = subArray[sb];
//       }
//     }
//     newArr[n] = largestNum;
//   }
//   console.log(newArr);
//   return newArr;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




// Check if a string (first argument, str) ends with the given target string (second argument, target)
// MY VERSION DOESN'T WORK IN ALL CASES -- WHY????
// function confirmEnding(str, target) {
//   let answer = false;
//   for (var i = target.length; i > 0; i--) {
//     if (str[str.length-1-i] === target[target.length-1-i]) {
//       answer = true;
//     }
//   } 
//   console.log(answer);
//   return answer;
//  }
//  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
// SIMILAR VERSION I FOUND THAT DOES WORK
//  function confirmEnding2(str, target) {
//   for (var i = 0; i < target.length; i++) {
//     if (target[target.length - 1 - i] != str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(confirmEnding2("Hello world", "worlds"));



//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// function repeatStringNumTimes(str, num) {
//   let repeatedStr = "";
//   if (num <= 0) {
//     return "";
//   } else {
//     for (var i = 1; i <= num; i++) {
//     repeatedStr += str;
//     }
//   }
//   return repeatedStr;
// }
// console.log(repeatStringNumTimes("abc", 3));
//WITH RECURSION
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }




//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// function truncateString(str, num) {
//   let shortString = "";
//   if (num > str.length) {
//     num = str.length;
//   };
//   for (var i = 0; i < num; i++) {
//     shortString += str[i];
//   };
//   if (num < str.length) {
//     shortString += "...";
//   };
//   console.log(shortString);
//   return shortString;
// }
// truncateString2("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length+2);
// //ANOTHER WAY -- USING SLICE METHOD
// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }


// Create a function that looks through an array (first argument) 
// and returns the first element in the array that passes a truth test 
// (second argument). If no element passes the test, return undefined.
// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       num = arr[i];
//       return num;
//     } 
//   }
// }

// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));



// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
// function booWho(bool) {
//   if (typeof(bool) === "boolean") {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(booWho(true));

//REFACTORED BY G
// function booWho(bool) {
//   return typeof(bool) === "boolean";




//Return the provided string with the first letter of each word capitalized. 
// function titleCase(str) {
//   let splitStr = str.toLowerCase().split(' ');
//   let array = [];
//   for (let i = 0; i < splitStr.length; i++) {
//       array.push(splitStr[i].replace(splitStr[i].charAt(0), splitStr[i].charAt(0).toUpperCase()));
//     } 
//     let result = array.join(' ');

//   return result;
// }

// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


