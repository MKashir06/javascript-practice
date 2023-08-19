// 1. Question: Reverse a string without using the built-in reverse() method.
const stringReverse = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

const stringToBeReversed = "Hello World!";
const reversedString = stringReverse(stringToBeReversed);
console.log(`Reversed String => (${stringToBeReversed}) to ${reversedString}`);

// 2. Question: Count the number of vowels in a given string.
const vowelsInString = (str) => {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
};

const givenString = "The quick brown fox jumps over a lazy dog";
const numberOfVowels = vowelsInString(givenString);
console.log(`Number of vowels in (${givenString}) are => ${numberOfVowels}`);

// 3. Question: Convert the first letter of each word in a sentence to uppercase.
const capitalizeWords = (sentence) => {
  const words = sentence.split(" ");
  const capitalizedWords = [];

  for (const word of words) {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    const capitalizedWord = firstLetter + restOfWord;
    capitalizedWords.push(capitalizedWord);
  }

  return capitalizedWords.join(" ");
};

const capitalizedSentence = capitalizeWords(givenString);
console.log(`Capitalized word in a sentence: ${capitalizedSentence}`);

// 4. Question: Check if a string is a palindrome.
const palindromeToCheck = "Madam";
let palindromeChecked = "";

const palindromeCheck = (givenString) => {
  for (let i = givenString.length - 1; i >= 0; i--) {
    palindromeChecked += givenString[i];
  }

  if (palindromeChecked === givenString) {
    return true;
  } else {
    return false;
  }
};

const palindrome = palindromeCheck(palindromeToCheck.toLowerCase());
console.log(
  `Palindrome: ${palindromeToCheck} == ${palindromeChecked} --> ${palindrome}`
);

// 5. Question: Find the sum of all positive numbers in an array.
const sumOfPositiveNumbersInArray = (array) => {
  let sum = 0;

  for (let num of array) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
};

const numArr = [1, -1, 3, -3, 5, -5, 7, -7];
const positiveSum = sumOfPositiveNumbersInArray(numArr);
console.log(`Sum of positive numbers in array ${numArr} => ${positiveSum}`);

// 6. Question: Find the index of the first occurrence of a specific element in an array.
const array = [
  "Muhammad",
  "Kashir",
  "Muhammad",
  "Talha",
  "Muhammad",
  "Kashir",
  "Muhammad",
  "Talha",
];

const targetElement = "Kashir";
const indexOfElement = array.indexOf(targetElement);

if (indexOfElement !== -1) {
  console.log(
    `The element (${targetElement}) was found at index ${indexOfElement}.`
  );
} else {
  console.log(`The element (${targetElement}) does not exist in the array.`);
}

// 7. Question: Remove all duplicates from an array without built-in methods.
const removeDuplicatesFromArray = (arr) => {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
};

const newArray = removeDuplicatesFromArray(array);
console.log(
  `Original Array => ${array} \nArray with Duplicates Removed => ${newArray}`
);

// 8. Question: Sort the array in ascending and descending without built-in methods.
const sortArrayInAsc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};

const sortArrayInDesc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};

const originalArray = [6, 12, 18, 2, 256, 5, 155, 144];
const array1 = [6, 12, 18, 2, 256, 5, 155, 144];
const array2 = [6, 12, 18, 2, 256, 5, 155, 144];

sortArrayInAsc(array1);
sortArrayInDesc(array2);

console.log(
  `Original Array: ${originalArray}\nArray in Ascending Order ${array1}\nArray in Descending Order => ${array2}`
);

// 9. Question: Print all even numbers between 1 and 20 using a while loop.
let number = 2;

while (number <= 20) {
  console.log(`Even numbers between 1 to 20 => ${number}`);
  number += 2;
}

// 10. Question: Calculate the factorial of a number using a do-while loop.
const factorialWithDoWhile = (num) => {
  if (num < 0) {
    return "Number is less than 0";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    let factorial = 1;
    let i = 1;

    do {
      factorial *= i;
      i++;
    } while (i <= num);

    return factorial;
  }
};

const num = 6;
const factorial = factorialWithDoWhile(num);
console.log(`Factorial of ${num} is => ${factorial}`);

// 11. Question: Iterate through the properties of an object using a for-in loop.
const manDetails = {
  firstName: "Muhammad",
  lastName: "Kashir",
  age: 26,
  occupation: "Software Engineer",
};

for (let property in manDetails) {
  if (manDetails.hasOwnProperty(property)) {
    console.log(`${property}: ${manDetails[property]}`);
  }
}

// 12. Question: Loop through an array using a for-of loop and double each element.
const numbersArr = [2, 128, 256, 8, 16];
const doubledNumbers = [];

for (const number of numbersArr) {
  const doubled = number * 2;
  doubledNumbers.push(doubled);
}

console.log(
  `Original Numbers => ${numbersArr}\nDoubled Numbers => ${doubledNumbers}`
);

// 13. Question: Check if a number is even or odd and return a corresponding message.
const checkNumFunc = (num) => {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

const numToCheck = 2;
const checkNumFuncVar = checkNumFunc(numToCheck);
console.log(`Number ${numToCheck} is ${checkNumFuncVar}`);

// 14. Question: Find the maximum of three numbers using nested ternary operators.
const findMax = (a, b, c) => {
  const max = a > b ? (a > c ? a : c) : b > c ? b : c;
  return max;
};

const num1 = 128;
const num2 = 256;
const num3 = 512;
const maximum = findMax(num1, num2, num3);
console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${maximum}`);

// 15. Question: Determine if a year is a leap year or not.
const checkLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

const year = 2024;
if (checkLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
