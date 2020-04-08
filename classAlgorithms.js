// Write a function that returns an array with all the numbers from 1 to 255.

// function returnAnArray() {
//   let numberArray = [];
//   for (var i = 1; i <= 255; i++) {
//     numberArray.push(i)
//   }
//   console.log(numberArray);
//   return numberArray;
// }

// let x = returnAnArray();
// console.log(x);



//Write a function that would get the 
//sum of all the even numbers from 1 to 1000.

// function evenNumbers() {
//   let sum = 0;
//   for (var i = 2; i <= 1000; i += 2) {
//      console.log(i);
//      sum += i;
//   }
//   console.log(sum);
//   return sum;
// }

// evenNumbers();




// Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14).

// let array = [-5, 2, 5, 12];

// function sumOfArray(array) {
//   let sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(sum);
//   return sum;
// } 

// sumOfArray(array);




// Write a function that will swap the first and last values of any given array.
//output should be 12, 2, 5, -5
// let array = [-5, 2, 5, 12];

// function swap(array) {
//   let first = array[0];
//   let last = array[array.length-1];
//   array[0] = last;
//   array[array.length-1] = first;
//   console.log(array);
//   return array;
// }

// swap(array);




//Complete the solution so that it reverses the string value passed into it.
//solution('world'); // returns 'dlrow'

function reverse(string) {  
  let newString = "";
  for (var i = 0; i <= (string.length-1); i++) {
    let last = string[(string.length-i)-1];
    let newFirst = last;
    console.log(newFirst);
    newString += newFirst;
  } 
  console.log(newString);
  return newString;
}

reverse('world');

function reverseB(string) {
  let newString = "";
  for (var i = string.length-1; i >= 0; i--) {
    newString += string[i];
  }
  console.log(newString);
  return newString;
}

reverseB("hello");