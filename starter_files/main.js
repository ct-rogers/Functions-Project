// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

// function max (num1 , num2) {
//  if (num1 > num2) {
//    console.log(num1 + " is larger than " + num2);
//  } else {
//    console.log(num1 + " is less than " + num2);
//  }
//  return;
//}
//
//max(100,50)

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return 'Uh-oh'
  }
}

console.log(max(6,4))


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

//let num1 = '30';
//let num2 = '20';
//let num3 = '10';
//
//function maxOfThree(num1, num2, num3) {
//
//  if (num1 > num2 && num1 > num3) {
//    console.log (num1);
//  } else if (num2 > num1 && num2 > num3) {
//    console.log (num2);
//  } else {
//    console.log (num3);
//  }
//
//}
//
//maxOfThree(30,20,10)

function maxOfThree(numA,numB,numC) {
  if (numA > numB && numA > numC) {
    return numA;
  }
  else if (numB > numA && numB > numC) {
    return numB;
  }
  else {
    return 'Ruh Oh'
  }
}

console.log(maxOfThree(30,20,10))

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

//function isVowel(x) {
//
//    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
//      console.log('true');
//    } else {
//      console.log('false');
//    }
//}
//
//isVowel('a')

function isVowel(char) {
  let vowels = ['a','e','i','o','u'];
  if (vowels.includes(char) === true) {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel('a'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum (a1,b1) {
  return a1 + b1;
}

console.log(sum(5,15));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

 function avg(number1,number2,number3) {
   return (number1 + number2 + number3)/3;
 }

 console.log(avg(10,10,10))


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(str) {
  return str.length;
}

console.log(getLength("HelloWorld"));



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan (c1,c2) {
  if (c1 < c2) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(greaterThan(3,8));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet (name) {
  return 'Hello, ' + name + ' ! ';
}

console.log(greet('Charlie'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.


function madLib(word1,word2,word3,word4) {
  return ('He was the ' + word1 + word2 + word3 + word4 + ' man around. ')
}

console.log(madLib('rootiness,','tootiness,','far-flinginess,','outrageous'));
